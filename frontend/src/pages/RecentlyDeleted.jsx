import Navbar from '@/app-components/Navbar';
import { Container, Heading, VStack, Table, Button, Portal, CloseButton, Dialog } from '@chakra-ui/react';
import { MdVisibility, MdDelete, MdRestore } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { toaster } from '../components/ui/toaster';
import { handlePreview } from '../utils/ResumeUtil';
import { useUserStore } from '@/store/userStore';

const RecentlyDeleted = () => {
  const user_id = useUserStore((state) => state.user_id);
  const [deletedResumes, setDeletedResumes] = useState([]);
  const [deleting, setDeleting] = useState(false);
  const [dialogOpenId, setDialogOpenId] = useState(null);

  const handlePermanentDelete = async (resumeId) => {
    setDeleting(true);
    try {
      const response = await fetch(`/api/resume/delete/${resumeId}`, { method: 'DELETE' });
      const data = await response.json();
      if (data.success) {
        const deletedResume = deletedResumes.find((r) => r.id === resumeId);
        setDeletedResumes((prev) => prev.filter((r) => r.id !== resumeId));
        toaster.create({
          title: 'Resume Permanently Deleted',
          description: `"${deletedResume?.resume_name || 'Resume'}" was permanently deleted.`,
          type: 'success',
        });
      } else {
        toaster.create({
          title: 'Delete Failed',
          description: data.message || 'Failed to permanently delete the resume.',
          type: 'error',
        });
      }
    } catch (err) {
      toaster.create({
        title: 'Delete Failed',
        description: 'An error occurred while permanently deleting the resume.',
        type: 'error',
      });
    } finally {
      setDeleting(false);
    }
  };

  useEffect(() => {
    const fetchDeletedResumes = async () => {
      if (!user_id) return;
      try {
        const response = await fetch(`/api/resume/getalldeleted/${user_id}`);
        const data = await response.json();
        if (data.success) {
          setDeletedResumes(
            data.resumes.map((resume) => ({
              id: resume._id,
              resume_name: resume.resume_name,
              date_deleted: resume.deleted_at ? resume.deleted_at.slice(0, 10) : '',
              resume_body: resume.resume_body,
            }))
          );
        }
      } catch (err) {
        setDeletedResumes([]);
      }
    };
    fetchDeletedResumes();
  }, [user_id]);

  const [restoring, setRestoring] = useState(false);

  const restoreResume = async (resumeId) => {
    setRestoring(true);
    try {
      const response = await fetch(`/api/resume/restore/${resumeId}`, { method: 'PATCH' });
      const data = await response.json();
      if (data.success) {
        const restoredResume = deletedResumes.find((r) => r.id === resumeId);
        setDeletedResumes((prev) => prev.filter((r) => r.id !== resumeId));
        toaster.create({
          title: 'Resume Restored',
          description: `"${restoredResume?.resume_name || 'Resume'}" was restored successfully.`,
          type: 'success',
        });
      } else {
        toaster.create({
          title: 'Restore Failed',
          description: data.message || 'Failed to restore the resume.',
          type: 'error',
        });
      }
    } catch (err) {
      toaster.create({
        title: 'Restore Failed',
        description: 'An error occurred while restoring the resume.',
        type: 'error',
      });
    } finally {
      setRestoring(false);
    }
  };

  const rows = deletedResumes.map((item) => (
    <Table.Row key={item.id}>
      <Table.Cell>{item.resume_name}</Table.Cell>
      <Table.Cell>{item.date_deleted}</Table.Cell>
      <Table.Cell style={{ display: 'flex', gap: '0.5rem' }}>
        <Button size="sm" variant="outline" onClick={() => handlePreview(item.resume_body)}>
          <MdVisibility /> Preview
        </Button>
        <Button size="sm" onClick={() => restoreResume(item.id)} isLoading={restoring}>
          <MdRestore /> Restore
        </Button>
        <Dialog.Root isOpen={dialogOpenId === item.id} onClose={() => setDialogOpenId(null)} placement="center">
          <Dialog.Trigger asChild>
            <Button size="sm" bg="#e57373" color="white" _hover={{ bg: '#c62828' }} onClick={() => setDialogOpenId(item.id)}>
              <MdDelete /> Delete
            </Button>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header></Dialog.Header>
                <Dialog.Body>
                  <p>Are you sure you want to permanently delete this resume? This action cannot be undone.</p>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.ActionTrigger asChild>
                    <Button variant="outline" onClick={() => setDialogOpenId(null)} disabled={deleting}>Cancel</Button>
                  </Dialog.ActionTrigger>
                  <Button size="sm" bg="#e57373" color="white" _hover={{ bg: '#c62828' }} onClick={() => { handlePermanentDelete(item.id); setDialogOpenId(null); }} isLoading={deleting}>
                    Delete
                  </Button>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Container ml={{ base: 0, md: '220px' }} maxW="calc(100vw - 220px)">
      <Navbar />
      <VStack spacing={4} mt={8} mx={6} alignItems="flex-start" width="100%">
        <Heading size={"5xl"} mt={8}>Recently Deleted Resumes</Heading>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Resume Name</Table.ColumnHeader>
              <Table.ColumnHeader>Date Deleted</Table.ColumnHeader>
              <Table.ColumnHeader>Action</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>{rows}</Table.Body>
        </Table.Root>
        {deletedResumes.length === 0 && (
          <Heading size="md" color="gray.500" mt={4}>
            No deleted resumes found
          </Heading>
        )}
      </VStack>
    </Container>
  );
};

export default RecentlyDeleted;

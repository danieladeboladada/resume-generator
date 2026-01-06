import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica',
    },
    section: {
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    contactInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 8,
    },
    contactText: {
        fontSize: 10,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        borderBottom: '1px solid #000',
        paddingBottom: 4,
    },
    text: {
        fontSize: 11,
        lineHeight: 1.5,
    },
    entryContainer: {
        marginBottom: 12,
    },
    entryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    entryTitle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    entryDate: {
        fontSize: 10,
        color: '#666',
    },
    bulletList: {
        marginLeft: 12,
    },
    bullet: {
        fontSize: 11,
        marginBottom: 4,
        lineHeight: 1.4,
    },
});

const ResumePDF = ({ resumeData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
        <View style={styles.section}>
            <Text style={styles.title}>{resumeData.fullName}</Text>
            <View style={styles.contactInfo}>
            {resumeData.email && <Text style={styles.contactText}>{resumeData.email}</Text>}
            {resumeData.phoneNo && <Text style={styles.contactText}>{resumeData.phoneNo}</Text>}
            {resumeData.linkedinUrl && <Text style={styles.contactText}>{resumeData.linkedinUrl}</Text>}
            </View>
        </View>

        {resumeData.summary.flag && resumeData.summary.value && (
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.text}>{resumeData.summary.value}</Text>
            </View>
        )}

        {resumeData.experience.flag && resumeData.experience.values.length > 0 && (
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {resumeData.experience.values.map((exp, idx) => (
                <View key={idx} style={styles.entryContainer}>
                <View style={styles.entryHeader}>
                    <Text style={styles.entryTitle}>{exp.heading}</Text>
                    <Text style={styles.entryDate}>
                    {exp.from_month_year} {exp.to_month_year && `- ${exp.to_month_year}`}
                    </Text>
                </View>
                {exp.bullet_points.length > 0 && (
                    <View style={styles.bulletList}>
                    {exp.bullet_points.map((bullet, bidx) => (
                        <Text key={bidx} style={styles.bullet}>• {bullet}</Text>
                    ))}
                    </View>
                )}
                </View>
            ))}
            </View>
        )}

        {resumeData.education.flag && resumeData.education.values.length > 0 && (
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resumeData.education.values.map((edu, idx) => (
                <Text key={idx} style={styles.text}>{edu}</Text>
            ))}
            </View>
        )}

        {resumeData.skills.flag && resumeData.skills.values.length > 0 && (
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.text}>{resumeData.skills.values.join(', ')}</Text>
            </View>
        )}
        </Page>
    </Document>
);

export default ResumePDF

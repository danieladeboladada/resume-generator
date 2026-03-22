import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

// ─── Styles ────────────────────────────────────────────────────────────────

const styles1 = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica',
    },
    section: {
        marginBottom: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    contactInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 8,
    },
    contactText: {
        fontSize: 12,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        borderBottom: '1px solid #000',
        paddingBottom: 4,
    },
    text: {
        fontSize: 13,
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
        fontSize: 14,
        fontWeight: 'bold',
    },
    entryDate: {
        fontSize: 12,
        color: '#666',
    },
    bulletList: {
        marginLeft: 12,
    },
    bullet: {
        fontSize: 13,
        marginBottom: 4,
        lineHeight: 1.4,
    },
});

const styles2 = StyleSheet.create({
    page: {
        padding: 0,
        fontFamily: 'Helvetica',
    },
    container: {
        flexDirection: 'row',
        height: '100%',
    },
    sidebar: {
        width: '35%',
        backgroundColor: '#D1FAE5',
        padding: 20,
    },
    content: {
        width: '65%',
        padding: 20,
        paddingLeft: 15,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#047857',
    },
    contactText: {
        fontSize: 11,
        marginBottom: 2,
        color: '#374151',
    },
    sidebarSection: {
        marginTop: 16,
        marginBottom: 12,
    },
    sidebarTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#047857',
        borderBottom: '2px solid #047857',
        paddingBottom: 3,
    },
    sidebarText: {
        fontSize: 12,
        lineHeight: 1.4,
        marginBottom: 3,
        color: '#1F2937',
    },
    contentSection: {
        marginBottom: 12,
    },
    contentTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#047857',
    },
    entryContainer: {
        marginBottom: 10,
    },
    entryTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    entryDate: {
        fontSize: 11,
        color: '#6B7280',
        marginBottom: 2,
    },
    bullet: {
        fontSize: 11,
        marginBottom: 2,
        marginLeft: 8,
        lineHeight: 1.3,
        color: '#374151',
    },
    skillsList: {
        fontSize: 11,
        lineHeight: 1.4,
        color: '#1F2937',
    },
});

const styles3 = StyleSheet.create({
    page: {
        padding: 0,
        fontFamily: 'Helvetica',
    },
    header: {
        backgroundColor: '#7C3AED',
        padding: 25,
        paddingBottom: 20,
    },
    headerName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 6,
    },
    headerContact: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    contactItem: {
        fontSize: 10,
        color: '#E9D5FF',
        marginRight: 12,
        marginBottom: 3,
    },
    body: {
        padding: 25,
    },
    twoColumn: {
        flexDirection: 'row',
        gap: 20,
    },
    mainColumn: {
        flex: 0.65,
    },
    sideColumn: {
        flex: 0.35,
    },
    section: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#7C3AED',
        marginBottom: 10,
        paddingBottom: 6,
        borderBottom: '3px solid #7C3AED',
    },
    sidebarTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#7C3AED',
        marginBottom: 8,
        paddingBottom: 4,
        borderBottom: '2px solid #DDD6FE',
    },
    summaryText: {
        fontSize: 12,
        lineHeight: 1.5,
        color: '#374151',
    },
    entryContainer: {
        marginBottom: 14,
    },
    entryTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 2,
    },
    entryDate: {
        fontSize: 11,
        color: '#7C3AED',
        fontWeight: '500',
        marginBottom: 4,
    },
    bullet: {
        fontSize: 11,
        marginBottom: 3,
        marginLeft: 8,
        lineHeight: 1.4,
        color: '#4B5563',
    },
    sidebarItem: {
        fontSize: 11,
        marginBottom: 5,
        color: '#374151',
        lineHeight: 1.4,
    },
    skillBadge: {
        fontSize: 10,
        backgroundColor: '#EDE9FE',
        color: '#7C3AED',
        paddingHorizontal: 8,
        paddingVertical: 3,
        marginRight: 6,
        marginBottom: 6,
        borderRadius: 2,
    },
});

const styles4 = StyleSheet.create({
    page: {
        padding: 0,
        fontFamily: 'Helvetica',
    },
    header: {
        backgroundColor: '#0F766E',
        padding: 28,
        paddingBottom: 22,
    },
    headerName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    headerContact: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 0,
    },
    contactItem: {
        fontSize: 10,
        color: '#99F6E4',
        marginRight: 16,
        marginBottom: 2,
    },
    body: {
        padding: 28,
    },
    section: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#F97316',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 8,
        paddingBottom: 4,
        borderBottom: '2px solid #F97316',
    },
    summaryText: {
        fontSize: 11,
        lineHeight: 1.5,
        color: '#374151',
    },
    entryContainer: {
        marginBottom: 12,
        paddingLeft: 10,
        borderLeft: '3px solid #0F766E',
    },
    entryTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 1,
    },
    entryDate: {
        fontSize: 10,
        color: '#F97316',
        marginBottom: 4,
    },
    bullet: {
        fontSize: 11,
        marginBottom: 3,
        marginLeft: 8,
        lineHeight: 1.4,
        color: '#4B5563',
    },
    eduItem: {
        fontSize: 11,
        marginBottom: 4,
        color: '#374151',
        lineHeight: 1.4,
    },
    skillsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    skillChip: {
        fontSize: 10,
        backgroundColor: '#CCFBF1',
        color: '#0F766E',
        paddingHorizontal: 8,
        paddingVertical: 3,
        marginRight: 6,
        marginBottom: 6,
        borderRadius: 10,
    },
});

const styles5 = StyleSheet.create({
    page: {
        padding: 0,
        fontFamily: 'Helvetica',
    },
    container: {
        flexDirection: 'row',
        height: '100%',
    },
    main: {
        width: '63%',
        padding: 28,
        backgroundColor: '#FFFFFF',
    },
    sidebar: {
        width: '37%',
        backgroundColor: '#1E3A5F',
        padding: 22,
    },
    nameBlock: {
        marginBottom: 18,
        borderBottom: '3px solid #D97706',
        paddingBottom: 14,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 4,
    },
    mainSectionTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#1E3A5F',
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        marginBottom: 8,
        paddingBottom: 4,
        borderBottom: '2px solid #D97706',
    },
    mainSection: {
        marginBottom: 16,
    },
    summaryText: {
        fontSize: 11,
        lineHeight: 1.5,
        color: '#374151',
    },
    entryContainer: {
        marginBottom: 11,
    },
    entryTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#111827',
    },
    entryDate: {
        fontSize: 10,
        color: '#D97706',
        marginBottom: 4,
    },
    bullet: {
        fontSize: 11,
        marginBottom: 3,
        marginLeft: 8,
        lineHeight: 1.4,
        color: '#4B5563',
    },
    sidebarName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 6,
    },
    contactItem: {
        fontSize: 10,
        color: '#93C5FD',
        marginBottom: 5,
        lineHeight: 1.4,
    },
    sidebarSectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#D97706',
        textTransform: 'uppercase',
        letterSpacing: 0.6,
        marginBottom: 8,
        marginTop: 16,
        paddingBottom: 4,
        borderBottom: '1px solid #2D5F8A',
    },
    sidebarItem: {
        fontSize: 11,
        color: '#E2E8F0',
        marginBottom: 5,
        lineHeight: 1.4,
    },
    skillDot: {
        fontSize: 10,
        color: '#BAE6FD',
        marginBottom: 5,
        lineHeight: 1.4,
    },
});

const styles6 = StyleSheet.create({
    page: {
        padding: 0,
        fontFamily: 'Helvetica',
    },
    header: {
        backgroundColor: '#9F1239',
        padding: 26,
    },
    headerName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 6,
    },
    headerContact: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    contactItem: {
        fontSize: 10,
        color: '#FECDD3',
        marginRight: 14,
        marginBottom: 2,
    },
    body: {
        padding: 26,
    },
    section: {
        marginBottom: 16,
    },
    sectionTitleWrap: {
        backgroundColor: '#FFF1F2',
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginBottom: 10,
        borderLeft: '4px solid #9F1239',
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#9F1239',
        textTransform: 'uppercase',
        letterSpacing: 0.8,
    },
    summaryText: {
        fontSize: 11,
        lineHeight: 1.5,
        color: '#374151',
    },
    entryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    entryTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    entryDate: {
        fontSize: 10,
        color: '#6B7280',
    },
    entryContainer: {
        marginBottom: 12,
        paddingBottom: 10,
        borderBottom: '1px solid #F3F4F6',
    },
    bullet: {
        fontSize: 11,
        marginBottom: 3,
        marginLeft: 10,
        lineHeight: 1.4,
        color: '#4B5563',
    },
    eduItem: {
        fontSize: 11,
        marginBottom: 4,
        color: '#374151',
        lineHeight: 1.4,
    },
    skillsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    skillBadge: {
        fontSize: 10,
        backgroundColor: '#FFE4E6',
        color: '#9F1239',
        paddingHorizontal: 9,
        paddingVertical: 3,
        marginRight: 6,
        marginBottom: 6,
        borderRadius: 3,
    },
});

// ─── Templates ─────────────────────────────────────────────────────────────

const Template1PDF = ({ resumeData }) => (
    <Document>
        <Page size="A4" style={styles1.page}>
        <View style={styles1.section}>
            <Text style={styles1.title}>{resumeData.fullName}</Text>
            <View style={styles1.contactInfo}>
            {resumeData.email && <Text style={styles1.contactText}>{resumeData.email}</Text>}
            {resumeData.phoneNo && <Text style={styles1.contactText}>{resumeData.phoneNo}</Text>}
            {resumeData.linkedinUrl && <Text style={styles1.contactText}>{resumeData.linkedinUrl}</Text>}
            </View>
        </View>

        {resumeData.summary.flag && resumeData.summary.value && (
            <View style={styles1.section}>
            <Text style={styles1.sectionTitle}>Summary</Text>
            <Text style={styles1.text}>{resumeData.summary.value}</Text>
            </View>
        )}

        {resumeData.experience.flag && resumeData.experience.values.length > 0 && (
            <View style={styles1.section}>
            <Text style={styles1.sectionTitle}>Experience</Text>
            {resumeData.experience.values.map((exp, idx) => (
                <View key={idx} style={styles1.entryContainer}>
                <View style={styles1.entryHeader}>
                    <Text style={styles1.entryTitle}>{exp.heading}</Text>
                    <Text style={styles1.entryDate}>
                    {exp.from_month_year} {exp.to_month_year && `- ${exp.to_month_year}`}
                    </Text>
                </View>
                {exp.bullet_points.length > 0 && (
                    <View style={styles1.bulletList}>
                    {exp.bullet_points.map((bullet, bidx) => (
                        <Text key={bidx} style={styles1.bullet}>• {bullet}</Text>
                    ))}
                    </View>
                )}
                </View>
            ))}
            </View>
        )}

        {resumeData.education.flag && resumeData.education.values.length > 0 && (
            <View style={styles1.section}>
            <Text style={styles1.sectionTitle}>Education</Text>
            {resumeData.education.values.map((edu, idx) => (
                <Text key={idx} style={styles1.text}>{edu}</Text>
            ))}
            </View>
        )}

        {resumeData.skills.flag && resumeData.skills.values.length > 0 && (
            <View style={styles1.section}>
            <Text style={styles1.sectionTitle}>Skills</Text>
            <Text style={styles1.text}>{resumeData.skills.values.join(', ')}</Text>
            </View>
        )}
        </Page>
    </Document>
);

const Template2PDF = ({ resumeData }) => (
    <Document>
        <Page size="A4" style={styles2.page}>
            <View style={styles2.container}>
                {/* Sidebar */}
                <View style={styles2.sidebar}>
                    <Text style={styles2.title}>{resumeData.fullName}</Text>
                    {resumeData.email && <Text style={styles2.contactText}>{resumeData.email}</Text>}
                    {resumeData.phoneNo && <Text style={styles2.contactText}>{resumeData.phoneNo}</Text>}
                    {resumeData.linkedinUrl && <Text style={styles2.contactText}>{resumeData.linkedinUrl}</Text>}

                    {resumeData.skills.flag && resumeData.skills.values.length > 0 && (
                        <View style={styles2.sidebarSection}>
                            <Text style={styles2.sidebarTitle}>Skills</Text>
                            {resumeData.skills.values.map((skill, idx) => (
                                <Text key={idx} style={styles2.sidebarText}>• {skill}</Text>
                            ))}
                        </View>
                    )}

                    {resumeData.education.flag && resumeData.education.values.length > 0 && (
                        <View style={styles2.sidebarSection}>
                            <Text style={styles2.sidebarTitle}>Education</Text>
                            {resumeData.education.values.map((edu, idx) => (
                                <Text key={idx} style={styles2.sidebarText}>{edu}</Text>
                            ))}
                        </View>
                    )}
                </View>

                {/* Main Content */}
                <View style={styles2.content}>
                    {resumeData.summary.flag && resumeData.summary.value && (
                        <View style={styles2.contentSection}>
                            <Text style={styles2.contentTitle}>Summary</Text>
                            <Text style={styles2.sidebarText}>{resumeData.summary.value}</Text>
                        </View>
                    )}

                    {resumeData.experience.flag && resumeData.experience.values.length > 0 && (
                        <View style={styles2.contentSection}>
                            <Text style={styles2.contentTitle}>Experience</Text>
                            {resumeData.experience.values.map((exp, idx) => (
                                <View key={idx} style={styles2.entryContainer}>
                                    <Text style={styles2.entryTitle}>{exp.heading}</Text>
                                    <Text style={styles2.entryDate}>
                                        {exp.from_month_year} {exp.to_month_year && `- ${exp.to_month_year}`}
                                    </Text>
                                    {exp.bullet_points.length > 0 && (
                                        <View>
                                            {exp.bullet_points.map((bullet, bidx) => (
                                                <Text key={bidx} style={styles2.bullet}>• {bullet}</Text>
                                            ))}
                                        </View>
                                    )}
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </View>
        </Page>
    </Document>
);

const Template3PDF = ({ resumeData }) => (
    <Document>
        <Page size="A4" style={styles3.page}>
            {/* Header */}
            <View style={styles3.header}>
                <Text style={styles3.headerName}>{resumeData.fullName}</Text>
                <View style={styles3.headerContact}>
                    {resumeData.email && <Text style={styles3.contactItem}>{resumeData.email}</Text>}
                    {resumeData.phoneNo && <Text style={styles3.contactItem}>{resumeData.phoneNo}</Text>}
                    {resumeData.linkedinUrl && <Text style={styles3.contactItem}>{resumeData.linkedinUrl}</Text>}
                </View>
            </View>

            {/* Body */}
            <View style={styles3.body}>
                <View style={styles3.twoColumn}>
                    {/* Main Content */}
                    <View style={styles3.mainColumn}>
                        {resumeData.summary.flag && resumeData.summary.value && (
                            <View style={styles3.section}>
                                <Text style={styles3.sectionTitle}>Professional Summary</Text>
                                <Text style={styles3.summaryText}>{resumeData.summary.value}</Text>
                            </View>
                        )}

                        {resumeData.experience.flag && resumeData.experience.values.length > 0 && (
                            <View style={styles3.section}>
                                <Text style={styles3.sectionTitle}>Experience</Text>
                                {resumeData.experience.values.map((exp, idx) => (
                                    <View key={idx} style={styles3.entryContainer}>
                                        <Text style={styles3.entryTitle}>{exp.heading}</Text>
                                        <Text style={styles3.entryDate}>
                                            {exp.from_month_year} {exp.to_month_year && `- ${exp.to_month_year}`}
                                        </Text>
                                        {exp.bullet_points.length > 0 && (
                                            <View>
                                                {exp.bullet_points.map((bullet, bidx) => (
                                                    <Text key={bidx} style={styles3.bullet}>▸ {bullet}</Text>
                                                ))}
                                            </View>
                                        )}
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>

                    {/* Sidebar */}
                    <View style={styles3.sideColumn}>
                        {resumeData.education.flag && resumeData.education.values.length > 0 && (
                            <View style={styles3.section}>
                                <Text style={styles3.sidebarTitle}>Education</Text>
                                {resumeData.education.values.map((edu, idx) => (
                                    <Text key={idx} style={styles3.sidebarItem}>{edu}</Text>
                                ))}
                            </View>
                        )}

                        {resumeData.skills.flag && resumeData.skills.values.length > 0 && (
                            <View style={styles3.section}>
                                <Text style={styles3.sidebarTitle}>Skills</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    {resumeData.skills.values.map((skill, idx) => (
                                        <Text key={idx} style={styles3.skillBadge}>{skill}</Text>
                                    ))}
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

const Template4PDF = ({ resumeData }) => (
    <Document>
        <Page size="A4" style={styles4.page}>
            <View style={styles4.header}>
                <Text style={styles4.headerName}>{resumeData.fullName}</Text>
                <View style={styles4.headerContact}>
                    {resumeData.email && <Text style={styles4.contactItem}>{resumeData.email}</Text>}
                    {resumeData.phoneNo && <Text style={styles4.contactItem}>{resumeData.phoneNo}</Text>}
                    {resumeData.linkedinUrl && <Text style={styles4.contactItem}>{resumeData.linkedinUrl}</Text>}
                </View>
            </View>

            <View style={styles4.body}>
                {resumeData.summary.flag && resumeData.summary.value && (
                    <View style={styles4.section}>
                        <Text style={styles4.sectionTitle}>Summary</Text>
                        <Text style={styles4.summaryText}>{resumeData.summary.value}</Text>
                    </View>
                )}

                {resumeData.experience.flag && resumeData.experience.values.length > 0 && (
                    <View style={styles4.section}>
                        <Text style={styles4.sectionTitle}>Experience</Text>
                        {resumeData.experience.values.map((exp, idx) => (
                            <View key={idx} style={styles4.entryContainer}>
                                <Text style={styles4.entryTitle}>{exp.heading}</Text>
                                <Text style={styles4.entryDate}>
                                    {exp.from_month_year}{exp.to_month_year && ` – ${exp.to_month_year}`}
                                </Text>
                                {exp.bullet_points.map((bullet, bidx) => (
                                    <Text key={bidx} style={styles4.bullet}>• {bullet}</Text>
                                ))}
                            </View>
                        ))}
                    </View>
                )}

                {resumeData.education.flag && resumeData.education.values.length > 0 && (
                    <View style={styles4.section}>
                        <Text style={styles4.sectionTitle}>Education</Text>
                        {resumeData.education.values.map((edu, idx) => (
                            <Text key={idx} style={styles4.eduItem}>{edu}</Text>
                        ))}
                    </View>
                )}

                {resumeData.skills.flag && resumeData.skills.values.length > 0 && (
                    <View style={styles4.section}>
                        <Text style={styles4.sectionTitle}>Skills</Text>
                        <View style={styles4.skillsRow}>
                            {resumeData.skills.values.map((skill, idx) => (
                                <Text key={idx} style={styles4.skillChip}>{skill}</Text>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </Page>
    </Document>
);

const Template5PDF = ({ resumeData }) => (
    <Document>
        <Page size="A4" style={styles5.page}>
            <View style={styles5.container}>
                {/* Main content */}
                <View style={styles5.main}>
                    <View style={styles5.nameBlock}>
                        <Text style={styles5.name}>{resumeData.fullName}</Text>
                    </View>

                    {resumeData.summary.flag && resumeData.summary.value && (
                        <View style={styles5.mainSection}>
                            <Text style={styles5.mainSectionTitle}>Profile</Text>
                            <Text style={styles5.summaryText}>{resumeData.summary.value}</Text>
                        </View>
                    )}

                    {resumeData.experience.flag && resumeData.experience.values.length > 0 && (
                        <View style={styles5.mainSection}>
                            <Text style={styles5.mainSectionTitle}>Experience</Text>
                            {resumeData.experience.values.map((exp, idx) => (
                                <View key={idx} style={styles5.entryContainer}>
                                    <Text style={styles5.entryTitle}>{exp.heading}</Text>
                                    <Text style={styles5.entryDate}>
                                        {exp.from_month_year}{exp.to_month_year && ` – ${exp.to_month_year}`}
                                    </Text>
                                    {exp.bullet_points.map((bullet, bidx) => (
                                        <Text key={bidx} style={styles5.bullet}>• {bullet}</Text>
                                    ))}
                                </View>
                            ))}
                        </View>
                    )}
                </View>

                {/* Sidebar */}
                <View style={styles5.sidebar}>
                    <Text style={styles5.sidebarName}>{resumeData.fullName}</Text>
                    {resumeData.email && <Text style={styles5.contactItem}>{resumeData.email}</Text>}
                    {resumeData.phoneNo && <Text style={styles5.contactItem}>{resumeData.phoneNo}</Text>}
                    {resumeData.linkedinUrl && <Text style={styles5.contactItem}>{resumeData.linkedinUrl}</Text>}

                    {resumeData.education.flag && resumeData.education.values.length > 0 && (
                        <View>
                            <Text style={styles5.sidebarSectionTitle}>Education</Text>
                            {resumeData.education.values.map((edu, idx) => (
                                <Text key={idx} style={styles5.sidebarItem}>{edu}</Text>
                            ))}
                        </View>
                    )}

                    {resumeData.skills.flag && resumeData.skills.values.length > 0 && (
                        <View>
                            <Text style={styles5.sidebarSectionTitle}>Skills</Text>
                            {resumeData.skills.values.map((skill, idx) => (
                                <Text key={idx} style={styles5.skillDot}>› {skill}</Text>
                            ))}
                        </View>
                    )}
                </View>
            </View>
        </Page>
    </Document>
);

const Template6PDF = ({ resumeData }) => (
    <Document>
        <Page size="A4" style={styles6.page}>
            <View style={styles6.header}>
                <Text style={styles6.headerName}>{resumeData.fullName}</Text>
                <View style={styles6.headerContact}>
                    {resumeData.email && <Text style={styles6.contactItem}>{resumeData.email}</Text>}
                    {resumeData.phoneNo && <Text style={styles6.contactItem}>{resumeData.phoneNo}</Text>}
                    {resumeData.linkedinUrl && <Text style={styles6.contactItem}>{resumeData.linkedinUrl}</Text>}
                </View>
            </View>

            <View style={styles6.body}>
                {resumeData.summary.flag && resumeData.summary.value && (
                    <View style={styles6.section}>
                        <View style={styles6.sectionTitleWrap}>
                            <Text style={styles6.sectionTitle}>Summary</Text>
                        </View>
                        <Text style={styles6.summaryText}>{resumeData.summary.value}</Text>
                    </View>
                )}

                {resumeData.experience.flag && resumeData.experience.values.length > 0 && (
                    <View style={styles6.section}>
                        <View style={styles6.sectionTitleWrap}>
                            <Text style={styles6.sectionTitle}>Experience</Text>
                        </View>
                        {resumeData.experience.values.map((exp, idx) => (
                            <View key={idx} style={styles6.entryContainer}>
                                <View style={styles6.entryHeader}>
                                    <Text style={styles6.entryTitle}>{exp.heading}</Text>
                                    <Text style={styles6.entryDate}>
                                        {exp.from_month_year}{exp.to_month_year && ` – ${exp.to_month_year}`}
                                    </Text>
                                </View>
                                {exp.bullet_points.map((bullet, bidx) => (
                                    <Text key={bidx} style={styles6.bullet}>• {bullet}</Text>
                                ))}
                            </View>
                        ))}
                    </View>
                )}

                {resumeData.education.flag && resumeData.education.values.length > 0 && (
                    <View style={styles6.section}>
                        <View style={styles6.sectionTitleWrap}>
                            <Text style={styles6.sectionTitle}>Education</Text>
                        </View>
                        {resumeData.education.values.map((edu, idx) => (
                            <Text key={idx} style={styles6.eduItem}>{edu}</Text>
                        ))}
                    </View>
                )}

                {resumeData.skills.flag && resumeData.skills.values.length > 0 && (
                    <View style={styles6.section}>
                        <View style={styles6.sectionTitleWrap}>
                            <Text style={styles6.sectionTitle}>Skills</Text>
                        </View>
                        <View style={styles6.skillsRow}>
                            {resumeData.skills.values.map((skill, idx) => (
                                <Text key={idx} style={styles6.skillBadge}>{skill}</Text>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </Page>
    </Document>
);

export { Template1PDF, Template2PDF, Template3PDF, Template4PDF, Template5PDF, Template6PDF }

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

const Template1PDF = ({ resumeData }) => (
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
                        {/* Summary */}
                        {resumeData.summary.flag && resumeData.summary.value && (
                            <View style={styles3.section}>
                                <Text style={styles3.sectionTitle}>Professional Summary</Text>
                                <Text style={styles3.summaryText}>{resumeData.summary.value}</Text>
                            </View>
                        )}

                        {/* Experience */}
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
                        {/* Education */}
                        {resumeData.education.flag && resumeData.education.values.length > 0 && (
                            <View style={styles3.section}>
                                <Text style={styles3.sidebarTitle}>Education</Text>
                                {resumeData.education.values.map((edu, idx) => (
                                    <Text key={idx} style={styles3.sidebarItem}>{edu}</Text>
                                ))}
                            </View>
                        )}

                        {/* Skills */}
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

export { Template1PDF, Template2PDF, Template3PDF }

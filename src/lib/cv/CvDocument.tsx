import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { translations, type Language } from "@/i18n/translations";
import { cvLabels } from "./cvLabels";
import { cvFontFamily } from "./registerFonts";

const c = {
  paper: "#FFFFFF",
  ink: "#1a1a1a",
  text: "#333333",
  muted: "#555555",
  light: "#777777",
  rule: "#CCCCCC",
  accent: "#1e3a5f",
};

const styles = StyleSheet.create({
  page: {
    fontSize: 9,
    color: c.text,
    backgroundColor: c.paper,
    paddingTop: 28,
    paddingBottom: 32,
    paddingHorizontal: 32,
    lineHeight: 1.35,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    gap: 14,
  },
  photo: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: c.rule,
  },
  photoPlaceholder: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: c.rule,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  headerMain: { flex: 1 },
  name: {
    fontSize: 18,
    fontWeight: 700,
    color: c.ink,
    marginBottom: 2,
  },
  role: {
    fontSize: 10.5,
    fontWeight: 700,
    color: c.accent,
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 9,
    color: c.muted,
    marginBottom: 6,
    lineHeight: 1.3,
  },
  contactLine: {
    fontSize: 8.5,
    color: c.muted,
    marginBottom: 1,
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: c.rule,
    marginBottom: 10,
  },
  section: { marginBottom: 7 },
  sectionTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: c.accent,
    marginBottom: 5,
    paddingBottom: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: c.rule,
    textTransform: "uppercase",
  },
  paragraph: {
    fontSize: 9,
    color: c.text,
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletDot: { width: 9, fontSize: 9, color: c.muted },
  bulletText: { flex: 1, fontSize: 9, color: c.text, lineHeight: 1.3 },
  twoCol: { flexDirection: "row", gap: 16 },
  col: { flex: 1 },
  expBlock: { marginBottom: 5 },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
    marginBottom: 1,
  },
  expRole: { fontSize: 9.5, fontWeight: 700, color: c.ink, flex: 1 },
  expDate: { fontSize: 8, color: c.muted, maxWidth: 110 },
  expCompany: { fontSize: 8.5, color: c.muted, marginBottom: 2 },
  skillCategory: {
    fontSize: 8.5,
    fontWeight: 700,
    color: c.ink,
    marginTop: 3,
    marginBottom: 1,
  },
  skillList: { fontSize: 8, color: c.text, lineHeight: 1.35, marginBottom: 2 },
  langLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8.5,
    marginBottom: 2,
  },
  footer: {
    position: "absolute",
    bottom: 22,
    left: 32,
    right: 32,
    paddingTop: 6,
    borderTopWidth: 0.5,
    borderTopColor: c.rule,
    fontSize: 7.5,
    color: c.light,
    textAlign: "center",
  },
  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 10,
  },
  statBox: {
    flexGrow: 1,
    minWidth: "22%",
    padding: 5,
    borderWidth: 0.5,
    borderColor: c.rule,
    backgroundColor: "#f8f9fa",
  },
  statNumber: { fontSize: 11, fontWeight: 700, color: c.accent },
  statLabel: { fontSize: 7.5, color: c.muted, marginTop: 1 },
});

function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

type CvDocumentProps = {
  lang: Language;
  photoSrc?: string;
};

export function CvDocument({ lang, photoSrc }: CvDocumentProps) {
  const t = translations[lang];
  const labels = cvLabels[lang];
  const fullName = `${t.hero.title1} ${t.hero.title2}`;
  const highlightIndexes = [0, 1, 2, 3] as const;
  const highlights = highlightIndexes.map((i) => t.projects.items[i]);
  const stats = [
    { number: "50+", label: t.hero.statHotels },
    { number: "30+", label: t.hero.statOrgs },
    { number: "80+", label: t.hero.statOffices },
  ];
  const fontFamily = cvFontFamily(lang);
  const pageStyle = { ...styles.page, fontFamily };

  return (
    <Document title={`${fullName} — ${labels.cvTitle}`} author={fullName}>
      <Page size="A4" style={pageStyle}>
        <View style={styles.header}>
          {photoSrc ? (
            <Image src={photoSrc} style={styles.photo} />
          ) : (
            <View style={styles.photoPlaceholder}>
              <Text style={{ fontSize: 16, color: c.muted }}>NT</Text>
            </View>
          )}
          <View style={styles.headerMain}>
            <Text style={styles.name}>
              {t.hero.title1} {t.hero.title2}
            </Text>
            <Text style={styles.role}>{t.hero.badge}</Text>
            <Text style={styles.subtitle}>{t.hero.subtitle}</Text>
            <Text style={styles.contactLine}>
              {t.contact.location} · {t.contact.email} · {t.contact.phone}
            </Text>
          </View>
        </View>

        <View style={styles.hr} />

        <View style={styles.statsRow}>
          {stats.map((stat, i) => (
            <View key={i} style={styles.statBox}>
              <Text style={styles.statNumber}>{stat.number}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <Text style={{ ...styles.paragraph, fontSize: 8.5, color: c.muted, marginBottom: 8 }}>
          {t.contact.desc}
        </Text>

        <View style={styles.section}>
          <SectionTitle>{labels.about}</SectionTitle>
          <Text style={styles.paragraph}>{t.about.p1}</Text>
          <Text style={styles.paragraph}>{t.about.p2}</Text>
          <Text style={styles.paragraph}>{t.about.p3}</Text>
        </View>

        <View style={styles.section}>
          <SectionTitle>{labels.highlights}</SectionTitle>
          {highlights.map((p, i) => (
            <Bullet key={i}>{`${p.number} — ${p.title}: ${p.desc}`}</Bullet>
          ))}
        </View>

        <View style={styles.twoCol}>
          <View style={styles.col}>
            <View style={styles.section}>
              <SectionTitle>{labels.languages}</SectionTitle>
              {t.languages.items.map((item, i) => (
                <View key={i} style={styles.langLine}>
                  <Text>{item.name}</Text>
                  <Text style={{ color: c.muted }}>{item.level}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.section}>
              <SectionTitle>{labels.skills}</SectionTitle>
              {t.skills.categories.slice(0, 3).map((cat, i) => (
                <View key={i}>
                  <Text style={styles.skillCategory}>{cat.name}</Text>
                  {"description" in cat && cat.description ? (
                    <Text style={{ fontSize: 7.5, color: c.muted, marginBottom: 2, lineHeight: 1.25 }}>
                      {cat.description}
                    </Text>
                  ) : null}
                  <Text style={styles.skillList}>{cat.items.slice(0, 4).join(" · ")}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <Text style={styles.footer}>
          {fullName} — {labels.cvTitle} — 1/2
        </Text>
      </Page>

      <Page size="A4" style={pageStyle}>
        <View style={styles.section}>
          <SectionTitle>{labels.experience}</SectionTitle>
          {t.experience.items.map((item, i) => (
            <View key={i} style={styles.expBlock}>
              <View style={styles.expHeader}>
                <Text style={styles.expRole}>{item.role}</Text>
                <Text style={styles.expDate}>{item.date}</Text>
              </View>
              <Text style={styles.expCompany}>{item.company}</Text>
              {item.duties.slice(0, 2).map((duty, j) => (
                <Bullet key={j}>{duty}</Bullet>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionTitle>{labels.skills}</SectionTitle>
          {t.skills.categories.slice(3).map((cat, i) => (
            <View key={i}>
              <Text style={styles.skillCategory}>{cat.name}</Text>
              {"description" in cat && cat.description ? (
                <Text style={{ fontSize: 7.5, color: c.muted, marginBottom: 2, lineHeight: 1.25 }}>
                  {cat.description}
                </Text>
              ) : null}
              <Text style={styles.skillList}>{cat.items.slice(0, 5).join(" · ")}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionTitle>{labels.contacts}</SectionTitle>
          <Text style={styles.paragraph}>{t.about.p4}</Text>
          <Text style={styles.paragraph}>{t.about.p4Work}</Text>
          <Text style={{ ...styles.paragraph, fontSize: 8.5 }}>
            {t.about.p4Cause} {t.about.p4CauseLink}
          </Text>
        </View>

        <Text style={styles.footer}>
          {t.contact.email} · {t.contact.phone} · {t.contact.location} — 2/2
        </Text>
      </Page>
    </Document>
  );
}

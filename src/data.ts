import { Course, Mentor, JobVacancy, CorporateEmployee } from "./types";

export const SEEDED_COURSES: Course[] = [
  {
    id: "hse-iosh",
    title: "IOSH Managing Safely",
    description: "Beynəlxalq IOSH standartlarına uyğun idarəçi və rəhbər heyət üçün təhlükəsizlik və risk menecmenti kursu.",
    category: "HSE",
    level: "Orta",
    duration: "24 saat / 3 Gün",
    lessonsCount: 6,
    rating: 4.9,
    reviewsCount: 168,
    trainer: "Anar Qasımov",
    trainerRole: "Cərrah & Beynəlxalq HƏMƏ/NEBOSH Eksperti",
    price: 340,
    type: "Hibrid",
    certificateType: "IOSH Beynəlxalq Sertifikat",
    skillsOutcome: [
      "Təhlükə amillərinin və risklərin qiymətləndirilməsi",
      "İnsidentlərin dərindən araşdırılması metodları",
      "HSE sahəsində performansın ölçülməsi",
      "Biznes fəaliyyətində təhlükəsizlik siyasətinin tətbiqi"
    ],
    syllabus: [
      { id: 1, title: "Təhlükəsiz idarəetməyə giriş", duration: "4 saat" },
      { id: 2, title: "Risklərin qiymətləndirilməsi (Risk Assessment)", duration: "4 saat" },
      { id: 3, title: "Risklərin nəzarətdə saxlanılması mexanizmləri", duration: "4 saat" },
      { id: 4, title: "Məsuliyyətlərin dərk edilməsi (Hüquqi baza)", duration: "4 saat" },
      { id: 5, title: "Təhlükələrin dərindən təhlil edilməsi", duration: "4 saat" },
      { id: 6, title: "İnsidentlərin araşdırılması və hesabatlıq", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "hse-working",
    title: "Working Safely",
    description: "Hər bir işçi üçün fundamental təhlükəsizlik mədəniyyəti, əsas risklər, şəxsi məsuliyyət və təhlükəsiz iş şəraiti üzrə baza təlimi.",
    category: "HSE",
    level: "Başlanğıc",
    duration: "8 saat / 1 Gün",
    lessonsCount: 4,
    rating: 4.8,
    reviewsCount: 120,
    trainer: "Anar Qasımov",
    trainerRole: "Beynəlxalq HƏMƏ/NEBOSH Eksperti",
    price: 110,
    type: "Əyani",
    certificateType: "IOSH Təsdiqli Sertifikat",
    skillsOutcome: [
      "İş yerində təhlükələri vaxtında seçmək",
      "Fərdi Mühafizə Vasitələrindən optimal istifadə",
      "Təhlükəsizlik nişanlarının düzgün oxunması",
      "Fövqəladə hallarda ilkin davranış qaydaları"
    ],
    syllabus: [
      { id: 1, title: "Təhlükəsiz işin əhəmiyyəti və əsas anlayışlar", duration: "2 saat" },
      { id: 2, title: "İş yerində rast gəlinən ümumi təhlükələr", duration: "2 saat" },
      { id: 3, title: "Ətraf mühitin qorunması və tullantıların idarə edilməsi", duration: "2 saat" },
      { id: 4, title: "Fərdi mühafizə vasitələri və təhlükəsizlik nişanları", duration: "2 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "hse-risk",
    title: "Risk Assessment (Risklərin Qiymətləndirilməsi)",
    description: "Sənayedə təhlükələrin müəyyən edilməsi, risk matrislərinin qurulması və risk səviyyəsinin azaldılması tədbirlərinin planlaşdırılması üzrə peşəkar praktikum.",
    category: "HSE",
    level: "Orta",
    duration: "12 saat / 2 Gün",
    lessonsCount: 4,
    rating: 4.85,
    reviewsCount: 88,
    trainer: "Tofiq Həsənov",
    trainerRole: "Baş HSE Menecer və Audit rəhbəri, Caspian Petroleum",
    price: 160,
    type: "Hibrid",
    certificateType: "ATİM Peşəkar Sertifikat",
    skillsOutcome: [
      "Təhlükələrin müəyyən edilməsi metodologiyası",
      "5 pilləli risk qiymətləndirmə mexanizmi",
      "Nəzarət iyerarxiyasının tətbiqi (Elimination - PPE)",
      "Risk qiymətləndirmə reyestrinin (Register) tərtibi"
    ],
    syllabus: [
      { id: 1, title: "Risk qiymətləndirilməsinə giriş və qanunvericilik", duration: "3 saat" },
      { id: 2, title: "Təhlükələrin təsnifatı və müəyyən edilməsi üsulları", duration: "3 saat" },
      { id: 3, title: "Risk səviyyəsinin hesablanması və keyfiyyət analizi", duration: "3 saat" },
      { id: 4, title: "Nəzarət tədbirlərinin təyin edilməsi və sənədləşmə", duration: "3 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "hse-height",
    title: "Work at Height (Hündürlükdə İş Zamanı Təhlükəsizlik)",
    description: "Hündürlükdə işlərin planlaşdırılması, qoruyucu kəmərlərin istifadəsi, lövbər nöqtələri (anchorage) və yıxılmanın qarşısını alan sistemlər.",
    category: "HSE",
    level: "Başlanğıc",
    duration: "8 saat / 1 Gün",
    lessonsCount: 3,
    rating: 4.75,
    reviewsCount: 94,
    trainer: "Anar Qasımov",
    trainerRole: "Sənaye Təhlükəsizlik Təlimçisi",
    price: 120,
    type: "Əyani",
    certificateType: "ATİM Texniki Sertifikat",
    skillsOutcome: [
      "Qoruyucu kəmər və avadanlıqların düzgün inspeksiyası",
      "Düşmə faktorunun (Fall Factor) hesablanması",
      "Xilasetmə planlarının (Rescue Plan) hazırlanması",
      "Asılma travmasının (Suspension Trauma) qarşısının alınması"
    ],
    syllabus: [
      { id: 1, title: "Hündürlükdə işin anatomiyası və hüquqi tələb-standartlar", duration: "3 saat" },
      { id: 2, title: "Düşmədən qorunma avadanlıqları və bərkitmə nizamı", duration: "3 saat" },
      { id: 3, title: "Fövqəladə xilasetmə və asılma travması ilkin yardım qaydası", duration: "2 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "hse-loto",
    title: "LOTO (Lockout/Tagout - Bloklama və Etiketləmə)",
    description: "Sənayedə təhlükəli enerji qaynaqlarının (elektrik, hidravlik, pnevmatik, mexaniki) idarə olunması üçün lockout/tagout prosedurlarının quraşdırılması.",
    category: "HSE",
    level: "Orta",
    duration: "8 saat / 1 Gün",
    lessonsCount: 4,
    rating: 4.9,
    reviewsCount: 76,
    trainer: "Tofiq Həsənov",
    trainerRole: "Sənaye Müfəttişi və HSE Mühafizə rəhbəri",
    price: 130,
    type: "Əyani",
    certificateType: "ATİM Peşəkar Sertifikat",
    skillsOutcome: [
      "Enerji izolyasiyasının 8 ardıcıl addımının tətbiqi",
      "Xüsusi kilid və etiket növlərinin seçilməsi",
      "Qalıq enerjinin (stored energy) boşaldılması",
      "Sistem sınaqlarının təhlükəsiz aparılması"
    ],
    syllabus: [
      { id: 1, title: "LOTO fəlsəfəsi və təhlükəli enerji növləri", duration: "2 saat" },
      { id: 2, title: "İzolyasiya cihazları və onların funksiyaları", duration: "2 saat" },
      { id: 3, title: "Qrup LOTO proseduru və mürəkkəb izolyasiya sxemləri", duration: "2 saat" },
      { id: 4, title: "İzolyasiyanın çıxarılması və sistemin yenidən işə salınması", duration: "2 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "hse-fire",
    title: "Fire Safety (Yanğın Təhlükəsizliyi)",
    description: "Yanğının əmələ gəlmə mexanizmi, yanğınsöndürmə balonlarının təsnifatı, duman və tüstüdən qorunma, təhlükəsiz təxliyə prosesi.",
    category: "HSE",
    level: "Başlanğıc",
    duration: "8 saat / 1 Gün",
    lessonsCount: 3,
    rating: 4.8,
    reviewsCount: 111,
    trainer: "Tofiq Həsənov",
    trainerRole: "FHN Təqaüdçü Polkovniki, Yanğın Təhlükəsizlik Protokolu Eksperti",
    price: 90,
    type: "Əyani",
    certificateType: "ATİM Texniki Sertifikat",
    skillsOutcome: [
      "A, B, C, D, E, F sinifli yanğınların söndürülmə metodları",
      "PASS metodologiyası ilə yanğınsöndürənlərdən istifadə",
      "İsti işlərin (Hot Works) nəzarəti və icazəsi",
      "Müəssisədə yanğın təxliyə planının qurulması"
    ],
    syllabus: [
      { id: 1, title: "Yanğın üçbucağı və yanğınların sinifləri", duration: "3 saat" },
      { id: 2, title: "İlkin söndürmə vasitələri (Balonlar, Hidrantlar, Yanğın yorğanları)", duration: "3 saat" },
      { id: 3, title: "Tüstüdən qorunma, evakuasiya və sınaq təlimatı", duration: "2 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },

  // Lifting Operations
  {
    id: "lift-rigger",
    title: "Rigger (Gözətçi / Sapançı təlimi)",
    description: "Yüklərin bağlanması, aşınmış polad və fiber sapanların müəyyənləşdirilməsi, kran operatoru ilə koordinasiyalı təhlükəsiz yükqaldırma.",
    category: "Lifting Operations",
    level: "Başlanğıc",
    duration: "16 saat / 2 Gün",
    lessonsCount: 5,
    rating: 4.85,
    reviewsCount: 145,
    trainer: "Elnur Məmmədov",
    trainerRole: "Lifting Operations Lead, BP Caspian Contractor",
    price: 180,
    type: "Əyani",
    certificateType: "LEEA Standartlı Sertifikat",
    skillsOutcome: [
      "Yük qaldırma kəndirlərinin və sapanların seçilməsi",
      "Gözü-bağlı sapanlama bucaq hesabatı (Sling Angles)",
      "İşçi yükləmə limitinin (SWL/WLL) hesablanması",
      "Avadanlıqların gündəlik vizual inspeksiyası"
    ],
    syllabus: [
      { id: 1, title: "Yükqaldırma əməliyyatlarına giriş və təhlükəsizlik qaydaları", duration: "3 saat" },
      { id: 2, title: "Sapan növləri (Polad, zəncir, sintetik) və istifadə bələdçisi", duration: "4 saat" },
      { id: 3, title: "Sapanlama bucaqlarının yükdaşıma gücünə təsiri və riyazi hesabat", duration: "3 saat" },
      { id: 4, title: "Yükqaldırma aksesuarları (Şəkillər, fırlanma mexanizmləri, qarmaqlar)", duration: "3 saat" },
      { id: 5, title: "Praktiki sapanlama sınağı və təhlükəsizlik imtahanı", duration: "3 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "lift-banksman",
    title: "Banksman (Dartma / İstiqamətverici)",
    description: "Böyük həcmli maşın və kranların kor nöqtələrində manevr edərkən onları təhlükəsiz yönləndirmə prosedurları və risklərin qarşısının alınması.",
    category: "Lifting Operations",
    level: "Başlanğıc",
    duration: "8 saat / 1 Gün",
    lessonsCount: 3,
    rating: 4.8,
    reviewsCount: 65,
    trainer: "Elnur Məmmədov",
    trainerRole: "Lojistika və Yükqaldırma Təlimçisi",
    price: 140,
    type: "Əyani",
    certificateType: "ATİM Peşəkar Sertifikat",
    skillsOutcome: [
      "Maşın kor bucaqlarının (Blind Spots) analizi",
      "Standard əl və radio işarələrinin dərk edilməsi",
      "Dayanma məsafələri və manevr vizuallaşdırma",
      "Manevr sahəsinin təhlükəsizlik kordonu idarəsi"
    ],
    syllabus: [
      { id: 1, title: "Banksman rolu, hüquq və məsuliyyətləri", duration: "3 saat" },
      { id: 2, title: "Standart əl işarələri və radio rabitə prinsipləri", duration: "3 saat" },
      { id: 3, title: "Manevr zonasında praktiki yönləndirmə və qiymətləndirmə", duration: "2 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "lift-signalman",
    title: "Signalman (Siqnalçı təlimi)",
    description: "Yük qaldırma sahələrində kran və digər ağır mexanizm operatoruna standart əl və səs siqnalları ilə təhlükəsiz yön verilməsi.",
    category: "Lifting Operations",
    level: "Başlanğıc",
    duration: "8 saat / 1 Gün",
    lessonsCount: 3,
    rating: 4.7,
    reviewsCount: 52,
    trainer: "Elnur Məmmədov",
    trainerRole: "Kran və Yük Əməliyyatları üzrə Təlimçi",
    price: 130,
    type: "Əyani",
    certificateType: "ATİM Texniki Sertifikat",
    skillsOutcome: [
      "Milli və beynəlxalq (OSHA/ASME) əl siqnalları",
      "Rabitə itdikdə təxirəsalınmaz qəza dayandırma siqnalı",
      "Hava şəraitinin yük yerdəyişməsinə təsir analizi",
      "Operatorla sinxron rabitə nizamı"
    ],
    syllabus: [
      { id: 1, title: "Siqnalçının hüquqi öhdəlikləri və kran mexaniki təməli", duration: "3 saat" },
      { id: 2, title: "Əl siqnallarının standart nümayişi (ASME B30.5)", duration: "3 saat" },
      { id: 3, title: "Görmə məhdudiyyətli relyefdə radio ilə kranın yönləndirilməsi", duration: "2 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "lift-supervisor",
    title: "Lift Supervisor (Yükqaldırma Əməliyyatlarına Nəzarətçi)",
    description: "Yükqaldırma əməliyyatlarına yerində birbaşa nəzarət edən, planın icrasını yoxlayan və təhlükəsizliyi təmin edən rəhbər şəxslər üçün xüsusi modul.",
    category: "Lifting Operations",
    level: "Orta",
    duration: "24 saat / 3 Gün",
    lessonsCount: 6,
    rating: 4.92,
    reviewsCount: 91,
    trainer: "Kamran Əliyev",
    trainerRole: "Yükqaldırma Layihələri Planlaşdırma Mürəkkəb Eksperti",
    price: 290,
    type: "Hibrid",
    certificateType: "LEEA Təsdiqli Sertifikat",
    skillsOutcome: [
      "Yükqaldırma Planının (Lift Plan) oxunması və ssenariləşdirilməsi",
      "Kran dayanıqlığı və torpaq təzyiqi (Outrigger Pad Loads) analizi",
      "Külək sürətinin dinamik yükə təsir hesabı",
      "Qəza hallarında planın dayandırılması və heyətin idarə edilməsi"
    ],
    syllabus: [
      { id: 1, title: "Supervayzerin rolu və qanunvericilik (LOLER 1998)", duration: "4 saat" },
      { id: 2, title: "Kran növləri və onların iş imkanları (Load Charts)", duration: "4 saat" },
      { id: 3, title: "Yükqaldırma avadanlıqlarının sertifikatlaşdırılma statusu", duration: "4 saat" },
      { id: 4, title: "Torpaq bərkliyi, outrigger dayaq ölçüləri hesabı", duration: "4 saat" },
      { id: 5, title: "Risk analizi və əməliyyatöncəsi brifinq (TBT) idarəsi", duration: "4 saat" },
      { id: 6, title: "Mürəkkəb yükqaldırmaların nəzarət simulyasiyası", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "lift-appointed",
    title: "Appointed Person (Təyin olunmuş Şəxs - Planlama)",
    description: "Mürəkkəb, tandem və yüksək riskli kran yükqaldırma əməliyyatlarının texniki cizgilərini, kran yerləşmə templərini və rəsmi Yükqaldırma Planını hazırlayan şəxs.",
    category: "Lifting Operations",
    level: "Yüksək",
    duration: "40 saat / 5 Gün",
    lessonsCount: 8,
    rating: 4.96,
    reviewsCount: 48,
    trainer: "Kamran Əliyev",
    trainerRole: "Chartered Lifting Engineer, LEEA Müəllif",
    price: 480,
    type: "Əyani",
    certificateType: "LEEA Beynəlxalq Appointed Person Sertifikatı",
    skillsOutcome: [
      "Kran seçimi üçün yükləmə qabiliyyəti diaqramlarının analizi",
      "3D AutoCAD ilə Kran fəaliyyət radiuslarının və cizgilərinin tərtibi",
      "Torpağın daşıyıcılıq sınağı və matların (Crane Mats) ölçüləndirilməsi",
      "Milli lisenziyalaşma və sənaye standartlı Yükqaldırma Planının hazırlanması"
    ],
    syllabus: [
      { id: 1, title: "LOLER və BS 7121 standartları çərçivəsində planlama", duration: "5 saat" },
      { id: 2, title: "Yükün xüsusiyyətləri: Ağırlıq mərkəzi (CoG) və həndəsi hesablama", duration: "5 saat" },
      { id: 3, title: "Kran seçimi və kran güc cədvəllərinin (Load Charts) dərin analizi", duration: "5 saat" },
      { id: 4, title: "Kran dayaq təzyiqi və mühəndislik torpaq örtüyünün yoxlanılması", duration: "5 saat" },
      { id: 5, title: "Kran yerüstü keçidləri, maneələr və gərginlik naqilləri ətrafında iş", duration: "5 saat" },
      { id: 6, title: "Köməkçi yükqaldırma aksesuarlarının gərilmə hesabı", duration: "5 saat" },
      { id: 7, title: "Yazılı Yükqaldırma Planının (Lifting Plan Method Statement) tərtibi", duration: "5 saat" },
      { id: 8, title: "Tandem (iki kranla) yükqaldırma planının mühəndislik layihələndirilməsi", duration: "5 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },

  // Inspection & Engineering
  {
    id: "eng-inspection",
    title: "Lifting Equipment Inspection",
    description: "Yükqaldırma kəndirlərinin, zəncirlərin, qarmaq və sapanların, kran qurğularının vizual və metal yorğunluğu üzrə beynəlxalq standartlara (LEEA) uyğun inspeksiyası.",
    category: "Inspection & Engineering",
    level: "Yüksək",
    duration: "30 saat / 5 Gün",
    lessonsCount: 6,
    rating: 4.9,
    reviewsCount: 72,
    trainer: "Kamran Əliyev",
    trainerRole: "Lifting Equipment Certifier, NDT Level III",
    price: 430,
    type: "Əyani",
    certificateType: "ATİM Beynəlxalq İnspektor Sertifikatı",
    skillsOutcome: [
      "Polad kəndirlərin qırılma və deorvasiya diaqnostikası",
      "Sapan köhnəlməsi və rəng kodlaşdırma sistemi təsdiqi",
      "Şəkillərin (Shackles) mikroskopik çat müfəttişliyi",
      "LOLER standard sənədlərinin (Report of Thorough Examination) doldurulması"
    ],
    syllabus: [
      { id: 1, title: "LOLER, ASME və EN standartlarında inspeksiya prinsipləri", duration: "5 saat" },
      { id: 2, title: "Sintetik və parça sapanların zədə növləri və imtina meyarları", duration: "5 saat" },
      { id: 3, title: "Zəncir və polad tel kəndirlərin metal deorvasiyası müfəttişliyi", duration: "5 saat" },
      { id: 4, title: "Şəkil, fırlanma lingləri və qarmaqların aşınma inspeksiyası", duration: "5 saat" },
      { id: 5, title: "Hərəkətli kran mexanizmlərinin struktur bütövlüyünün analizi", duration: "5 saat" },
      { id: 6, title: "Praktiki inspeksiya laboratoriyası və protokol tərtibi", duration: "5 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "eng-welding",
    title: "Welding Inspection (Qaynaq Müfəttişliyi)",
    description: "Qaynaq tikişlərində yaranan daxili və xarici qüsurların aşkarlanması, qaynaq prosedurlarının (WPS) və qaynaqçı sertifikatlarının yoxlanılması.",
    category: "Inspection & Engineering",
    level: "Yüksək",
    duration: "32 saat / 6 Gün",
    lessonsCount: 6,
    rating: 4.88,
    reviewsCount: 59,
    trainer: "Kamran Əliyev",
    trainerRole: "Qaynaq Mühəndisi & Certified CSWIP Inspector",
    price: 420,
    type: "Əyani",
    certificateType: "ATİM Müfəttiş Sertifikatı",
    skillsOutcome: [
      "Qaynaq qüsurlarının (çat, məsamə, şlak) vizual tanınması",
      "Qaynaq spesifikasiya sənədinin (WPS / PQR) yoxlanılması",
      "Qaynaq tikiş ölçülərinin xüsusi qaynaq şablonları ilə ölçülməsi",
      "Beynəlxalq AWS D1.1 və ASME Sec IX standard interpretasiyası"
    ],
    syllabus: [
      { id: 1, title: "Qaynaq texnologiyalarına giriş və qaynaq növləri", duration: "5 saat" },
      { id: 2, title: "Qaynaq tikiş geometriyası və vizual qaynaq qüsurları", duration: "6 saat" },
      { id: 3, title: "Qaynaq materialları (Elektrodlar, qoruyucu qazlar) və metallurgiya", duration: "5 saat" },
      { id: 4, title: "WPS (Welding Procedure Specification) oxunması və tərtibi", duration: "5 saat" },
      { id: 5, title: "Qaynaqçıların sınağı və sertifikatlaşdırılma meyarları", duration: "5 saat" },
      { id: 6, title: "Praktiki vizual qaynaq inspeksiyası və hesabat laboratoriyası", duration: "6 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "eng-ndt",
    title: "NDT Awareness (Qeyri-Dağıdıcı Sınaq Metodları)",
    description: "Materiallara zərər vermədən onların daxili və səthi qüsurlarını aşkarlayan NDT metodlarının (VT, PT, MT, UT, RT) iş prinsipləri və seçilmə qaydaları.",
    category: "Inspection & Engineering",
    level: "Orta",
    duration: "18 saat / 3 Gün",
    lessonsCount: 5,
    rating: 4.82,
    reviewsCount: 64,
    trainer: "Kamran Əliyev",
    trainerRole: "NDT Level III Ekspert",
    price: 310,
    type: "Hibrid",
    certificateType: "ATİM Peşəkar Sertifikat",
    skillsOutcome: [
      "VT (Vizual yoxlama) və PT (Penetrant boyaq testi) tətbiqi",
      "MT (Maqnit toz testi) ilə səthaltı çatların tapılması",
      "UT (Ultrasəs testi) ilə metal qalınlığının ölçülməsi",
      "RT (Radiometrik rentgen) nəticələrinin ümumi oxunması"
    ],
    syllabus: [
      { id: 1, title: "Qeyri-dağıdıcı sınaq (NDT) fəlsəfəsi və tarixi inkişafı", duration: "3 saat" },
      { id: 2, title: "Səthi NDT Metodları: Vizual (VT) və Penetrant Boyaq (PT)", duration: "4 saat" },
      { id: 3, title: "Maqnit tozları (MT) ilə çat diaqnostikası laboratoriyası", duration: "4 saat" },
      { id: 4, title: "Akustik ötürmə: Ultrasəs metal qalınlıq və qüsur testi (UT)", duration: "4 saat" },
      { id: 5, title: "Şüalanma ilə sınaq: Radiometrik rentgen fəaliyyət siyasəti", duration: "3 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },

  // Oil & Gas
  {
    id: "og-ptw",
    title: "Permit to Work (PTW - İş İcazələri Sistemi)",
    description: "Neft-qaz və sənaye obyektlərində yüksək riskli işlərin (isti iş, qapalı sferalara giriş, qazma) koordinasiyası və rəsmi icazə vərəqlərinin idarəsi.",
    category: "Oil & Gas",
    level: "Orta",
    duration: "12 saat / 2 Gün",
    lessonsCount: 4,
    rating: 4.9,
    reviewsCount: 110,
    trainer: "Tofiq Həsənov",
    trainerRole: "HSE və PTW İdarəçi Mütəxəssis, SOCAR Neftqaz",
    price: 150,
    type: "Onlayn",
    certificateType: "ATİM Peşəkar Sertifikat",
    skillsOutcome: [
      "İş İcazələrinin (PTW) doldurulması və təsdiq prosesi",
      "Soyuq iş (Cold Work) və İsti iş (Hot Work) fərqləri",
      "İzolyasiya sertifikatları ilə PTW-nin əlaqələndirilməsi",
      "Alətüstü Təlimat (TBT - Toolbox Talk) keçirilməsi"
    ],
    syllabus: [
      { id: 1, title: "İş İcazələri (PTW) sisteminin strukturu və məqsədi", duration: "3 saat" },
      { id: 2, title: "İş icazəsi növləri, əlavə dəstəkləyici sertifikatlar", duration: "3 saat" },
      { id: 3, title: "Kilidləmə (LOTO) və qaz testlərinin PTW inteqrasiyası", duration: "3 saat" },
      { id: 4, title: "İş yerinin təhvil verilməsi və icazə vərəqinin bağlanması", duration: "3 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "og-h2s",
    title: "H2S Awareness",
    description: "Son dərəcə toksik kükürd hidrogen qazının fiziki-kimyəvi xassələri, detektorların istifadəsi, tənəffüs aparatları (SCBA) və xilasetmə addımları.",
    category: "Oil & Gas",
    level: "Başlanğıc",
    duration: "8 saat / 1 Gün",
    lessonsCount: 3,
    rating: 4.88,
    reviewsCount: 156,
    trainer: "Anar Qasımov",
    trainerRole: "H2S Safe Pass Tədrisçisi, BP Akreditasiya",
    price: 110,
    type: "Əyani",
    certificateType: "Beynəlxalq OPITO Standartlı Sertifikat",
    skillsOutcome: [
      "H2S qazının bədənə toksik fizioloji təsirlərinin analizi",
      "Şəxsi və sahə detektorlarının kalibrlənməsi",
      "SCBA (Sıxılmış Hava Tənəffüs Aparatı) cəld geyinilməsi top sınağı",
      "Fövqəladə evakuasiya və külək yönünə görə toplanma məntəqəsi seçimi"
    ],
    syllabus: [
      { id: 1, title: "H2S qazının biosferası, fiziki xüsusiyyətləri və PPM limitləri", duration: "3 saat" },
      { id: 2, title: "Qaz detektor növləri, tənəffüs maskaları və SCBA texniki qaydalar", duration: "3 saat" },
      { id: 3, title: "Praktiki sınaq, zəhərlənmiş şəxsə süni nəfəs və təxliyə nizamı", duration: "2 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "og-process",
    title: "Process Safety (Proseslərin Təhlükəsizliyi)",
    description: "Kimyəvi zavodlarda və quyu platformalarında təhlükəli maddələrin sızmasının qarşısını almaq üçün mühəndislik və idarəetmə maneələrinin qurulması.",
    category: "Oil & Gas",
    level: "Yüksək",
    duration: "24 saat / 4 Həftə",
    lessonsCount: 6,
    rating: 4.94,
    reviewsCount: 39,
    trainer: "Tofiq Həsənov",
    trainerRole: "Process Safety Fellow, SOCAR Karbamid",
    price: 360,
    type: "Hibrid",
    certificateType: "ATİM Peşəkar Sertifikat",
    skillsOutcome: [
      "HAZOP (Hazard and Operability Analysis) metod tətbiqi",
      "Proses səviyyəsində Bow-Tie maneə diaqramlarının qurulması",
      "Keçici sızma və təzyiq qorunma ventilləri mühəndisliyi",
      "Texnoloji İnsidentlərin kök-səbəb (Root Cause) tədqiqatı"
    ],
    syllabus: [
      { id: 1, title: "Əməyin mühafizəsi və Proses Təhlükəsizliyi arasındakı fərqlər", duration: "4 saat" },
      { id: 2, title: "Təhlükəli maddələr və ilkin sızma maneələri (Primary Containment)", duration: "4 saat" },
      { id: 3, title: "Dizayn təhlükəsizliyi və P&ID texniki cizgilərinin təhlili", duration: "4 saat" },
      { id: 4, title: "HAZOP dərsləri: Risklərin qrup şəraitində analizi", duration: "4 saat" },
      { id: 5, title: "Təhlükəsizlik kritik elementləri (SCE) və texniki qoruma sistemi", duration: "4 saat" },
      { id: 6, title: "İş rejimində dəyişikliklərin idarə edilməsi (MOC) proseduru", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },

  // Construction
  {
    id: "con-scaffold",
    title: "Scaffold Inspector (İskele Müfəttişi)",
    description: "Tikinti meydançalarında quraşdırılmış metal iskele qurğularının möhkəmlik, dayanıqlıq və təhlükəsizlik baxımından inspeksiyası və yaşıl/qırmızı etiketlənməsi.",
    category: "Construction",
    level: "Orta",
    duration: "16 saat / 2 Gün",
    lessonsCount: 4,
    rating: 4.86,
    reviewsCount: 68,
    trainer: "Anar Qasımov",
    trainerRole: "Tikinti Təhlükəsizliyi və Scaffold Lead Müfəttiş",
    price: 210,
    type: "Əyani",
    certificateType: "CISRS Standartlı Sertifikat",
    skillsOutcome: [
      "İskele təməlinin (Sole Board) və dayaqların yoxlanılması",
      "Standard, Ledcer və Transom birləşmələrinin kontrolu",
      "Kenar qorumaları (Toe Boards & Guardrails) standartı",
      "Scafftag (İskele Etiketi) sisteminin rəsmi qeydiyyatı"
    ],
    syllabus: [
      { id: 1, title: "Tikinti iskele növləri və əsas komponentləri", duration: "4 saat" },
      { id: 2, title: "İskele dayanıqlığı: Sabitləmə və diaqonal birləşmələr", duration: "4 saat" },
      { id: 3, title: "İskele platformalarında yıxılmadan qorunma bəndləri", duration: "4 saat" },
      { id: 4, title: "Praktiki inspeksiya, hesabatın doldurulması və Scafftag quraşdırılması", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "con-sitesafety",
    title: "Site Safety (Tikinti Müvəffəqiyyəti)",
    description: "Tikinti sahəsindəki ümumi qəza səbəbləri, ağır texnikaların hərəkəti, dərin qazma (excavation) işləri və yıxılma əleyhinə tədbirlər.",
    category: "Construction",
    level: "Başlanğıc",
    duration: "16 saat / 2 Gün",
    lessonsCount: 5,
    rating: 4.80,
    reviewsCount: 78,
    trainer: "Anar Qasımov",
    trainerRole: "Baş HSE Menecer, PMD Projects",
    price: 150,
    type: "Əyani",
    certificateType: "ATİM Peşəkar Sertifikat",
    skillsOutcome: [
      "Meydançaya giriş nizam-intizamının təşkili",
      "Dərin qazma yerlərində yan uçqun qoruyucu (Shoring) seçimləri",
      "Həsir hasarlanma və sənaye fərdi nişanlama sistemi",
      "Elektrik panellərinin sənaye mühafizəsi testi"
    ],
    syllabus: [
      { id: 1, title: "Tikintidə ümumi risk amilləri və qanunvericilik təməlləri", duration: "3 saat" },
      { id: 2, title: "Qazma işləri (Excavations): Sabitləşmə, giriş və çatmama maneələri", duration: "3 saat" },
      { id: 3, title: "İctimai nəqliyyat və ağır tikinti maşınlarının təhlükəsiz idarəsi", duration: "3 saat" },
      { id: 4, title: "Üst mərtəbələrdən əşya düşməsi riskləri və qoruyucu torlar", duration: "3 saat" },
      { id: 5, title: "Tikinti sahəsində işgüzar nizam və sanitar-gigiyenik normalar", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },

  // Leadership
  {
    id: "lead-leadership",
    title: "Leadership (Korporativ Liderlik)",
    description: "Müasir menecerlər üçün vizyoner liderlik konsepsiyası, qərar qəbul etmə metodikaları, liderlik stilləri və emosional zəka.",
    category: "Leadership",
    level: "Yüksək",
    duration: "20 saat / 4 Həftə",
    lessonsCount: 5,
    rating: 4.95,
    reviewsCount: 130,
    trainer: "Faiq Mustafayev",
    trainerRole: "Biznes İnkişafı və PMO Konsultant, Azercell",
    price: 280,
    type: "Hibrid",
    certificateType: "ATİM Menecment Sertifikatı",
    skillsOutcome: [
      "Vəziyyətə uyğun Liderlik (Situational Leadership) tətbiqi",
      "Emosional intellektin (EQ) idarəetmədə mənimsənilməsi",
      "Strateji vizyon formalaşdırılması və KPI təyini",
      "Nümayəndə heyətinə effektiv səlahiyyət vermə (Delegation)"
    ],
    syllabus: [
      { id: 1, title: "Liderlik vs Menecment: Modern yanaşmalar", duration: "4 saat" },
      { id: 2, title: "Liderlik stillərinin fərqləndirilməsi və adaptasiya", duration: "4 saat" },
      { id: 3, title: "Emosional İntellekt: Şəxsiyyətlərarası münasibətlərin bünövrəsi", duration: "4 saat" },
      { id: 4, title: "Böhran və gərginlik dövrlərində qərar vermə texnikaları", duration: "4 saat" },
      { id: 5, title: "Şəxsi liderlik brendinin vizyon metodologiyası", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "lead-comm",
    title: "Communication (Effektiv İletişim)",
    description: "İş mühitində düzgün bədən dili, aktiv dinləmə, təqdimat bacarıqları, münaqişələrin idarə olunması və rəsmi yazışma nizamı.",
    category: "Leadership",
    level: "Başlanğıc",
    duration: "12 saat / 2 Həftə",
    lessonsCount: 4,
    rating: 4.88,
    reviewsCount: 142,
    trainer: "Faiq Mustafayev",
    trainerRole: "Kommunikasiya Məsləhətçisi",
    price: 180,
    type: "Onlayn",
    certificateType: "ATİM Peşəkar Sertifikat",
    skillsOutcome: [
      "Biznes yazı qaydaları və professional e-poçt strukturu",
      "Təqdimat qabiliyyətləri və auditoriyanı ələ alma",
      "Gərgin şəraitdə diplomatik dialoqun saxlanılması",
      "Bədən dilinin beynəlxalq işgüzar interpretasiyası"
    ],
    syllabus: [
      { id: 1, title: "Aktiv dinləmə və rəyin (feedback) düzgün verilməsi", duration: "3 saat" },
      { id: 2, title: "Rəsmi işgüzar e-poçt və korporativ yazışma standartları", duration: "3 saat" },
      { id: 3, title: "İctimaiyyət qarşısında çıxış və stress menecmenti", duration: "3 saat" },
      { id: 4, title: "Qruplararası münaqişələrin (Conflicts) diplomatik idarəsi", duration: "3 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "lead-team",
    title: "Team Management (Komanda İdarəetməsi)",
    description: "Yüksək performanslı komandaların qurulması, işlərin bölünməsi, motivasiya teoriləri, işçilərin inkişafı və delegasiya.",
    category: "Leadership",
    level: "Orta",
    duration: "16 saat / 3 Həftə",
    lessonsCount: 4,
    rating: 4.9,
    reviewsCount: 95,
    trainer: "Faiq Mustafayev",
    trainerRole: "Təşkilati İnkişaf və HR eksperti",
    price: 240,
    type: "Hibrid",
    certificateType: "ATİM Peşəkar Sertifikat",
    skillsOutcome: [
      "Tukman (Forming-Storming-Norming-Performing) komanda modeli",
      "Maslou və Hersberq motivasiya prinsipi tətbiqi",
      "Gündəlik iş bölgüsü və monitorinq sistem bünövrəsi",
      "Performans qiymətləndirilməsi və 1-on-1 görüşlərin təşkili"
    ],
    syllabus: [
      { id: 1, title: "Yüksək performanslı komandaların vizual bünövrəsi", duration: "4 saat" },
      { id: 2, title: "Rol bölgüsü: Belbin komanda rolları analizi", duration: "4 saat" },
      { id: 3, title: "Müasir motivasiya alətləri və tətbiqi manipulyasiyası", duration: "4 saat" },
      { id: 4, title: "Hədəflərlə idarəetmə (MBO) və fərdi inkişaf planı (IDP)", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },

  // Digital Skills
  {
    id: "dig-aitools",
    title: "AI Tools (Süni İntellekt Alətləri)",
    description: "Məhsuldarlığı artırmaq üçün sənayedə istifadə olunan ən son süni intellekt alətlərinin (Midjourney, Copilot, NotebookLM, v.s.) praktiki tətbiqi.",
    category: "Digital Skills",
    level: "Başlanğıc",
    duration: "12 saat / 2 Həftə",
    lessonsCount: 4,
    rating: 4.92,
    reviewsCount: 180,
    trainer: "Aysel Piriyeva",
    trainerRole: "Süni İntellekt rəhbəri, Pasha Holding",
    price: 200,
    type: "Onlayn",
    certificateType: "ATİM Rəqəmsal Sertifikat",
    skillsOutcome: [
      "Text-to-Image və Text-to-Video generativ alətlərlə iş",
      "Proqramlaşdırma və yazı işlərinə AI asistent inteqrasiyası",
      "Avtomatlaşdırılmış data tədqiqatı və xülasə yaradılması",
      "Süni intellekt alətlərinin etik istifadə limitləri"
    ],
    syllabus: [
      { id: 1, title: "Generative AI təməlləri və cari beynəlxalq mənzərə", duration: "3 saat" },
      { id: 2, title: "Görüntü və multimedia generasiyası (Midjourney, Runway)", duration: "3 saat" },
      { id: 3, title: "NotebookLM və ChatGPT ilə sənədlərin analiz nizamı", duration: "3 saat" },
      { id: 4, title: "Gündəlik işlərdə AI Agentlərdən və avtomatlaşdırmadan istifadə", duration: "3 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "dig-chatgpt",
    title: "ChatGPT for Business",
    description: "Peşəkar prompt mühəndisliyi (Prompt Engineering), xüsusi GPT-lərin (Custom GPTs) yaradılması və biznes proseslərində süni intellekt tətbiqi.",
    category: "Digital Skills",
    level: "Orta",
    duration: "10 saat / 2 Həftə",
    lessonsCount: 4,
    rating: 4.95,
    reviewsCount: 210,
    trainer: "Aysel Piriyeva",
    trainerRole: "Data Mühəndisi & AI Strategist",
    price: 190,
    type: "Onlayn",
    certificateType: "ATİM Rəqəmsal Sertifikat",
    skillsOutcome: [
      "Mürəkkəb prompt strukturlarının (Few-Shot, Chain-of-Thought) yazılması",
      "Biznes təqdimatları üçün struktur və kontent yaradılması",
      "Məlumat toplama və rəqib analizi üçün ChatGPT tətbiqi",
      "Şəxsi Custom GPT asistentinin kodsuz proqramlaşdırılması"
    ],
    syllabus: [
      { id: 1, title: "Prompt mühəndisliyinin fundamental qaydaları və miflər", duration: "2.5 saat" },
      { id: 2, title: "ChatGPT biznes tətbiqləri: Kopiraytinq, PR və Marketinq vizyonu", duration: "2.5 saat" },
      { id: 3, title: "Məlumatların emalı, Excel formul yaradılması və SQL asistanlığı", duration: "2.5 saat" },
      { id: 4, title: "Custom GPT təşkil edilməsi və daxili API qoşulma qaydaları", duration: "2.5 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "dig-excel",
    title: "Excel Advanced (Müasir Excel)",
    description: "Böyük məlumat massivləri ilə işləmək üçün mürəkkəb düsturlar (XLOOKUP, INDEX/MATCH), Pivot cədvəllər, Power Query və Excel makroları.",
    category: "Digital Skills",
    level: "Yüksək",
    duration: "24 saat / 4 Həftə",
    lessonsCount: 6,
    rating: 4.88,
    reviewsCount: 312,
    trainer: "Leyla Kərimova",
    trainerRole: "Baş SQL və Excel Analitiki, Kapital Bank",
    price: 160,
    type: "Onlayn",
    certificateType: "ATİM Peşəkar Sertifikat",
    skillsOutcome: [
      "Dinamik array formulaları (FILTER, UNIQUE, SORT)",
      "Power Query ilə məlumatların təmizlənməsi və birləşdirilməsi",
      "Maliyyə və satış üzrə interaktiv Pivot Dashboard-lar",
      "VBA ilə təkrarlanan əməliyyatların avtomatlaşdırılması"
    ],
    syllabus: [
      { id: 1, title: "Təməl təkrar və mürəkkəb məntiqi funksiyalar (AND, OR, nested IF)", duration: "4 saat" },
      { id: 2, title: "Axtarış və istinad: XLOOKUP, INDEX, MATCH geniş tətbiqi", duration: "4 saat" },
      { id: 3, title: "Pivot Tables, Slicers və dynamic chart dizayn prinsipləri", duration: "4 saat" },
      { id: 4, title: "Power Query ilə verilənlərin avtomatik idxalı (ETL)", duration: "4 saat" },
      { id: 5, title: "Excel daxili riyazi və maliyyə modelləşdirmə üsulları", duration: "4 saat" },
      { id: 6, title: "Baza səviyyəli VBA və Makrolarla işlərin sürətləndirilməsi", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "dig-powerbi",
    title: "Power BI (Biznes Analitikası)",
    description: "İstənilən data qaynağından gələn məlumatları birləşdirib daxili interaktiv rəhbər panelləri (interactive dashboards) qurmaq üçün Power BI dərindən öyrədilməsi.",
    category: "Digital Skills",
    level: "Yüksək",
    duration: "30 saat / 5 Həftə",
    lessonsCount: 6,
    rating: 4.96,
    reviewsCount: 182,
    trainer: "Leyla Kərimova",
    trainerRole: "Data Elm Mütəxəssisi və Power BI Eksperti",
    price: 330,
    type: "Onlayn",
    certificateType: "ATİM Peşəkar Sertifikat",
    skillsOutcome: [
      "Power BI ulduz sxemi data modelləşdirmə texnikası",
      "Hərtərəfli DAX mürəkkəb düsturları (CALCULATE, RELATED, FILTER)",
      "Zaman seriyası (Time Intelligence) analitika düsturları",
      "Power BI Service ilə bulud üzərində avtomatik yenilənən hesabat paylaşımı"
    ],
    syllabus: [
      { id: 1, title: "Power BI təməlləri, interfeys və verilənlərə qoşulma", duration: "5 saat" },
      { id: 2, title: "Power Query sənaye data təmizləme ssenariləri", duration: "5 saat" },
      { id: 3, title: "Fakt və ölçü cədvəllərinin əlaqələndirilməsi (Relational Modeling)", duration: "5 saat" },
      { id: 4, title: "DAX hesablamaları: Sütun və ölçülər (Calculated Columns vs Measures)", duration: "5 saat" },
      { id: 5, title: "Aha! Vizual dizayn: rəng nizamı, interaktiv filterlər və kartlar", duration: "5 saat" },
      { id: 6, title: "Power BI Cloud Service ilə hesabatların rəsmi bülleten paylaşımı", duration: "5 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "hse-nebosh-igc",
    title: "NEBOSH International General Certificate (IGC)",
    description: "Sənayedə əməyin təhlükəsizliyi sahəsində beynəlxalq səviyyədə ən nüfuzlu qızıl standartlı sertifikasiya və idarəetmə kursu.",
    category: "HSE",
    level: "Yüksək",
    duration: "80 saat / 10 Gün",
    lessonsCount: 10,
    rating: 4.98,
    reviewsCount: 245,
    trainer: "Anar Qasımov",
    trainerRole: "Chartered Safety Practitioner & NEBOSH Lead Tutor",
    price: 850,
    type: "Hibrid",
    certificateType: "NEBOSH UK Diplomu / Sertifikatı",
    skillsOutcome: [
      "Beynəlxalq HŞƏM qanunvericiliyi və idarəetmə sistemləri",
      "İş yerində risklərin tam profilli qiymətləndirilməsi",
      "Texnoloji təhlükəsizlik və nəzarət mexanizmləri",
      "HŞƏM mədəniyyətinin gücləndirilməsi metodları"
    ],
    syllabus: [
      { id: 1, title: "HŞƏM idarəetmə prinsipləri və əsasları (IG1)", duration: "8 saat" },
      { id: 2, title: "Planlaşdırma və tətbiq prinsipləri", duration: "8 saat" },
      { id: 3, title: "HŞƏM performansının ölçülməsi və yoxlanılması", duration: "8 saat" },
      { id: 4, title: "Fiziki və psixoloji sağlamlıq riskləri", duration: "8 saat" },
      { id: 5, title: "İş yerində hərəkət və işçi mühit təhlükəsizliyi (IG2)", duration: "8 saat" },
      { id: 6, title: "Yanğın və elektrik təhlükəsizliyi idarəetməsi", duration: "8 saat" },
      { id: 7, title: "Mexaniki və avadanlıq təhlükələri", duration: "8 saat" },
      { id: 8, title: "Kimyəvi və bioloji təhlükəli maddələr", duration: "8 saat" },
      { id: 9, title: "Yük qaldırma və hərəkətli maşınlar", duration: "8 saat" },
      { id: 10, title: "Praktiki risk qiymətləndirmə layihəsi", duration: "8 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "hse-nebosh-hsw",
    title: "NEBOSH Health and Safety at Work (HSW)",
    description: "Əməyin mühafizəsi sahəsinə yeni başlayanlar üçün təhlükəsizlik qaydalarının və iş yeri risklərinin fundamental beynəlxalq dərsi.",
    category: "HSE",
    level: "Başlanğıc",
    duration: "24 saat / 3 Gün",
    lessonsCount: 5,
    rating: 4.85,
    reviewsCount: 140,
    trainer: "Anar Qasımov",
    trainerRole: "Cərrah & Beynəlxalq HƏMƏ/NEBOSH Eksperti",
    price: 250,
    type: "Əyani",
    certificateType: "NEBOSH Award Certificate (UK)",
    skillsOutcome: [
      "İş yerində təhlükəsiz davranış mənimsənilməsi",
      "Risk qiymətləndirmə prinsiplərinin tətbiqi",
      "Hadisələrin ilkin qeydiyyatı və araşdırılması"
    ],
    syllabus: [
      { id: 1, title: "Təhlükəsiz işin əsas anlayışları", duration: "5 saat" },
      { id: 2, title: "İş yerində risk növləri və idarəetmə addımları", duration: "5 saat" },
      { id: 3, title: "Avadanlıq və nəqliyyat təhlükəsizliyi", duration: "5 saat" },
      { id: 4, title: "Elektrik və yanğın riskinin idarə edilməsi", duration: "5 saat" },
      { id: 5, title: "Yazılı sınaq və sual-cavab imtahanı", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "hse-iso45001",
    title: "ISO 45001:2018 Lead Auditor (Əməyin Mühafizəsi)",
    description: "Peşəkar fəalliyyət zamanı sağlamlığın və əməyin təhlükəsizliyinin idarə edilməsi beynəlxalq standartı üzrə baş auditor hazırlığı.",
    category: "HSE",
    level: "Yüksək",
    duration: "40 saat / 5 Gün",
    lessonsCount: 5,
    rating: 4.93,
    reviewsCount: 95,
    trainer: "Tofiq Həsənov",
    trainerRole: "Lead Auditor IRCA, Caspian Petroleum",
    price: 390,
    type: "Hibrid",
    certificateType: "IRCA Sertifikatlı Lead Auditor Lisenziyası",
    skillsOutcome: [
      "ISO 45001 standartının maddələrinin dərindən təhlili",
      "Audit strategiyasının qurulması və maraqlı tərəflərlə ünsiyyət",
      "Audit uyğunsuzluq hesabatlarının tərtibatı və izlənməsi"
    ],
    syllabus: [
      { id: 1, title: "ISO 45001 strukturu, High-Level Structure (HLS)", duration: "8 saat" },
      { id: 2, title: "Təşkilat konteksti, liderlik və işçi iştirakçılığı", duration: "8 saat" },
      { id: 3, title: "Audit növləri, auditin planlaşdırılması", duration: "8 saat" },
      { id: 4, title: "Audit texnikaları, sübutların toplanması və analiz", duration: "8 saat" },
      { id: 5, title: "IRCA Rəsmi İmtahan və Audit Rol Oyunu", duration: "8 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "lead-iso9001",
    title: "ISO 9001:2015 Lead Auditor (Keyfiyyətin İdarəedilməsi)",
    description: "Beynəlxalq standartlara uyğun Keyfiyyət İdarəetmə Sistemi (KİS/QMS) üzrə IRCA sertifikatlı rəsmi baş auditor dərsləri.",
    category: "Leadership",
    level: "Yüksək",
    duration: "40 saat / 5 Gün",
    lessonsCount: 5,
    rating: 4.9,
    reviewsCount: 88,
    trainer: "Faiq Mustafayev",
    trainerRole: "QMS Consultant & Senior Lead Auditor",
    price: 380,
    type: "Hibrid",
    certificateType: "IRCA Beynəlxalq Lead Auditor Sertifikatı",
    skillsOutcome: [
      "Keyfiyyət idarəetmədə müştəri məmnuniyyəti dərki",
      "Proses yönümlü idarəetmə və risk bazalı düşüncə",
      "Birinci, ikinci və üçüncü tərəf auditlərinin idarəsi"
    ],
    syllabus: [
      { id: 1, title: "ISO 9001 standart tələbləri və prinsipləri", duration: "8 saat" },
      { id: 2, title: "Proses dizaynı və keyfiyyət hədəfləri", duration: "8 saat" },
      { id: 3, title: "Auditin planlaşdırılması və checklist-lərin qurulması", duration: "8 saat" },
      { id: 4, title: "Auditin icrası, açılış və bağlanış iclaslarının təşkili", duration: "8 saat" },
      { id: 5, title: "IRCA rəsmi imtahanı və nümunə audit qiymətləndirilməsi", duration: "8 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "hse-iso14001",
    title: "ISO 14001:2015 Lead Auditor (Ətraf Mühitin İdarə Edilməsi)",
    description: "Təşkilatların ekoloji təsirini minimuma endirmək və audit fəaliyyətini tam nizamlamaq üçün unikal IRCA rəsmi kursu.",
    category: "HSE",
    level: "Yüksək",
    duration: "40 saat / 5 Gün",
    lessonsCount: 5,
    rating: 4.88,
    reviewsCount: 64,
    trainer: "Tofiq Həsənov",
    trainerRole: "Baş Ekologiya və HSE Müfəttişi",
    price: 380,
    type: "Onlayn",
    certificateType: "IRCA Beynəlxalq Ekologiya Auditoru",
    skillsOutcome: [
      "Ətraf mühit aspektləri və dərəcələrinin müəyyənləşdirilməsi",
      "Ekoloji audit hesabatlarının hazırlanması",
      "ISO 14001:2015 qanunvericilik tələblərinin təhlili"
    ],
    syllabus: [
      { id: 1, title: "Ekoloji qanunvericilik və ISO 14001 standart maddələri", duration: "8 saat" },
      { id: 2, title: "Ekoloji fəaliyyət aspektlərinin qiymətləndirilməsi", duration: "8 saat" },
      { id: 3, title: "Ekoloji fövqəladə hallara hazırlıq idarəetməsi", duration: "8 saat" },
      { id: 4, title: "Auditin icrası və ətraf mühit performans göstəriciləri", duration: "8 saat" },
      { id: 5, title: "IRCA imtahanı və vəziyyət təhlili laboratoriyası", duration: "8 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "og-bosiet",
    title: "BOSIET (Offshore Təhlükəsizliyinə Giriş)",
    description: "Offshore (dəniz) neft-qaz qurğularında çalışacaq hər bir işçi üçün mütləq olan fundamental təhlükəsizlik və qəzadan xilasetmə təlimi.",
    category: "Oil & Gas",
    level: "Başlanğıc",
    duration: "24 saat / 3 Gün",
    lessonsCount: 4,
    rating: 4.97,
    reviewsCount: 310,
    trainer: "Anar Qasımov",
    trainerRole: "OPITO Approved Instructor & HUET Specialist",
    price: 650,
    type: "Əyani",
    certificateType: "OPITO Təsdiqli BOSIET Sertifikatı",
    skillsOutcome: [
      "Helikopter Qəzası Zamanı Sualtı Təxliyə (HUET) bacarığı",
      "Dənizdə xilas olma və suüstü sağ qalma texnikası",
      "Yanğınsöndürmə və özünü mühafizə, ilkin tibbi yardım"
    ],
    syllabus: [
      { id: 1, title: "Təhlükəsizliyə giriş və dəniz riskləri brifinqi", duration: "6 saat" },
      { id: 2, title: "Helikopter qəzası zamanı sualtı təxliyə (HUET sınağı)", duration: "6 saat" },
      { id: 3, title: "Dənizdə sağ qalma sınaqları və fərdi xilasetmə salları", duration: "6 saat" },
      { id: 4, title: "İlkin yardım və yanğın söndürmə dərsləri", duration: "6 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "og-confined",
    title: "Confined Space Entry (Qapalı Sahələrə Giriş)",
    description: "Qapalı sferalarda (rezervuarlar, quyular, tunellər) iş və xilasetmə əməliyyatlarında təhlükəsizlik nizamnaməsi.",
    category: "Oil & Gas",
    level: "Orta",
    duration: "8 saat / 1 Gün",
    lessonsCount: 3,
    rating: 4.87,
    reviewsCount: 165,
    trainer: "Anar Qasımov",
    trainerRole: "Texniki Təhlükəsizlik üzrə Baş Təlimçi",
    price: 140,
    type: "Əyani",
    certificateType: "ATİM Beynəlxalq Standartlı Sertifikatı",
    skillsOutcome: [
      "Qapalı sahə risklərinin təyin edilməsi və qaz təmizlənməsi",
      "Nəfəs alma dərəcəsinin xüsusi SCBA ilə tənzimlənməsi",
      "Hadisə zamanı acil xilasetmə (Rescue Tripod) tətbiqi"
    ],
    syllabus: [
      { id: 1, title: "Qapalı sahə təsnifatları və işə giriş icazələri (PTW)", duration: "3 saat" },
      { id: 2, title: "Hava sınağı, detektorların tətbiqi və ventilyasiya qaydaları", duration: "3 saat" },
      { id: 3, title: "Praktiki xilasetmə simulyasiyası, tripod və asqı kəmərləri", duration: "2 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "og-gastesting",
    title: "Gas Testing (Qaz Ölçmə və Detektorlar)",
    description: "Təhlükəli, yanar və boğucu qazların mövcud olduğu sənaye sahələrində atmosfer analizi və ölçmə cihazlarının (Atmosphere Tester) istifadəsi.",
    category: "Oil & Gas",
    level: "Orta",
    duration: "8 saat / 1 Gün",
    lessonsCount: 3,
    rating: 4.82,
    reviewsCount: 92,
    trainer: "Tofiq Həsənov",
    trainerRole: "Industrial Safety Consultant & Gas Tester",
    price: 120,
    type: "Əyani",
    certificateType: "OPITO / ATİM Təsdiqli Sertifikat",
    skillsOutcome: [
      "Oksigen səviyyəsi, LEL (Lower Explosive Limit) və toksik qaz ölçməsi",
      "Qaz ölçmə cihazlarının kalibrlənməsi və təmizlənməsi",
      "Qiymətləndirmə sənədlərinin (Gas Testing Record) rəsmi doldurulması"
    ],
    syllabus: [
      { id: 1, title: "Kimyəvi atmosfer riskləri və yanma şərtləri", duration: "3 saat" },
      { id: 2, title: "Portativ qaz detektorları ilə iş qaydaları", duration: "3 saat" },
      { id: 3, title: "İş yerində praktiki qaz ölçmələri və risk analizi", duration: "2 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "lift-craneop",
    title: "Crane Operator (Kran Operatoru)",
    description: "Mobil və portal kranların təhlükəsiz idarə edilməsi, kranın dayanıqlıq hesabatı və yük cədvəllərinin (Load Charts) tətbiqi.",
    category: "Lifting Operations",
    level: "Orta",
    duration: "32 saat / 4 Gün",
    lessonsCount: 5,
    rating: 4.91,
    reviewsCount: 110,
    trainer: "Elnur Məmmədov",
    trainerRole: "Lifting Operations Lead & Crane Certifier",
    price: 350,
    type: "Əyani",
    certificateType: "ATİM Rəsmi Kran Operatoru Lisenziyası",
    skillsOutcome: [
      "Kran dayanıqlığı və dayaq bucağı ssenariləri",
      "Kranın Load Chart göstəricilərinin düzgün oxunması",
      "Siqnalçı və Rigger ilə əlaqəli sinxron fəaliyyət"
    ],
    syllabus: [
      { id: 1, title: "Kranların texniki quruluşu, mexaniki nöqtələr", duration: "6 saat" },
      { id: 2, title: "Yük diaqramları və təhlükəsiz iş limitləri (WLL)", duration: "7 saat" },
      { id: 3, title: "Yük qaldırma mühəndisliyi və manevr sahəsində iş", duration: "6 saat" },
      { id: 4, title: "Hava şəraiti və külək gücünün kran işinə təsiri", duration: "6 saat" },
      { id: 5, title: "Kran üzərində praktiki sınaq və idarəetmə imtahanı", duration: "7 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "lift-forklift",
    title: "Forklift Operator (Avtoyükləyici)",
    description: "Sənaye anbarlarında və tikinti sahələrində forklift (avtoyükləyici) maşınlarının təhlükəsiz idarə olunması dərsləri.",
    category: "Lifting Operations",
    level: "Başlanğıc",
    duration: "16 saat / 2 Gün",
    lessonsCount: 4,
    rating: 4.86,
    reviewsCount: 125,
    trainer: "Elnur Məmmədov",
    trainerRole: "Logistika və Yükqaldırma Təlimçisi",
    price: 150,
    type: "Əyani",
    certificateType: "ATİM Forklift Sürücülük Sertifikatı",
    skillsOutcome: [
      "Forkliftin yük balansı və ağırlıq mərkəzi (Load Center) prinsipi",
      "Dönmə təhlükəsizliyi və rəflər arası manevr",
      "Qoruyucu avadanlıq və gündəlik inspeksiya"
    ],
    syllabus: [
      { id: 1, title: "Forkliftin mühərrik sistemi və təməl idarə anlayışları", duration: "4 saat" },
      { id: 2, title: "Ağırlıq üçbucağı və devrilmə risklərinin qarşısının alınması", duration: "4 saat" },
      { id: 3, title: "Anbarda paletlərin rəflərə yığılması nizamı", duration: "4 saat" },
      { id: 4, title: "Praktiki forklift idarəetmə sınağı və təhlükəsizlik testi", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "lift-riginspect",
    title: "Slinging & Rigging Müfəttişliyi",
    description: "Yükqaldırma sapanlarının, şəkillərin, qarmaq və trosların metal deorvasiyası və LEEA beynəlxalq yoxlama meyarları üzrə orta səviyyəli kurs.",
    category: "Lifting Operations",
    level: "Orta",
    duration: "16 saat / 2 Gün",
    lessonsCount: 4,
    rating: 4.9,
    reviewsCount: 78,
    trainer: "Kamran Əliyev",
    trainerRole: "Certified Lifting Equipment Inspector",
    price: 190,
    type: "Əyani",
    certificateType: "LEEA ssenarili ATİM Sertifikatı",
    skillsOutcome: [
      "Rigging avadanlıqlarında aşınma limitlərinin təyin edilməsi",
      "Qarmaqlarda və gözlərdə deformasiya dərki",
      "Sertifikat sənədlərinin oxunması"
    ],
    syllabus: [
      { id: 1, title: "Lifting aksesuarları qanunvericiliyi və LOLER tələbləri", duration: "4 saat" },
      { id: 2, title: "Zəncir və polad tel sapanların yoxlama metodikaları", duration: "4 saat" },
      { id: 3, title: "Şəkil, fırlanma lingləri və asqı nöqtələri inspeksiyası", duration: "4 saat" },
      { id: 4, title: "Praktiki laboratoriya və aşınmış sapanların etibarsızlaşdırılması", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "con-scafferector",
    title: "CISRS Scaffold Erector (İskele Quraşdırıcısı)",
    description: "Sənaye metal iskele sistemlərinin beynəlxalq CISRS standartlarına tam uyğun, təhlükəsiz şəkildə quraşdırılması və sökülməsi kursu.",
    category: "Construction",
    level: "Başlanğıc",
    duration: "24 saat / 3 Gün",
    lessonsCount: 5,
    rating: 4.88,
    reviewsCount: 55,
    trainer: "Anar Qasımov",
    trainerRole: "CISRS Advanced Scaffolder & Scaffold Lead",
    price: 210,
    type: "Əyani",
    certificateType: "CISRS Beynəlxalq İskele Quraşdırıcısı Kartı",
    skillsOutcome: [
      "Borulu və sistemli iskelelərin montaj texnikası",
      "İskele dayaq gərilməsi, torpaq təzyiqi və bərkitmələr",
      "Quraşdırma zamanı hündürlükdə təhlükəsiz iş üsulları"
    ],
    syllabus: [
      { id: 1, title: "İskele hissələri, standart quraşdırma terminologiyası", duration: "5 saat" },
      { id: 2, title: "İskele təməlinin hazırlanması, Sole plates və jacks yerləşimi", duration: "5 saat" },
      { id: 3, title: "Ledcer, transom və diagonal montaj qaydaları", duration: "5 saat" },
      { id: 4, title: "Taxta lövhələrin döşənməsi, kənar mühafizə guardrails", duration: "5 saat" },
      { id: 5, title: "Sökülmə ardıcıllığı, təbəqələşmə sınağı və praktiki montaj", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "con-excavation",
    title: "Excavation Safety (Qazma İşlərində Təhlükəsizlik)",
    description: "Xəndəklərin və dərin qazma sahələrinin uçqun risklərinə qarşı təhlükəsizliyinin təmini, shoring sistemlərinin növləri və yoxlanılması.",
    category: "Construction",
    level: "Orta",
    duration: "12 saat / 2 Gün",
    lessonsCount: 3,
    rating: 4.81,
    reviewsCount: 46,
    trainer: "Anar Qasımov",
    trainerRole: "Civil Engineering Safety Expert",
    price: 140,
    type: "Əyani",
    certificateType: "ATİM Peşəkar Sertifikatı",
    skillsOutcome: [
      "Qazma uçqun təhlükələrinin təyin edilməsi və torpaq növlərinin təsnifatı",
      "Shoring, shielding və sloping qoruma vasitələrinin seçimi",
      "Daxili relyef yeraltı kommunikasiya xətlərinin (CAT & Genny) təhlili"
    ],
    syllabus: [
      { id: 1, title: "Qazma işləri qanunvericiliyi və torpaq mexanikası", duration: "4 saat" },
      { id: 2, title: "Yeraltı xidmətlərin (Kabel, boru) CAT skaneri ilə tapılması", duration: "4 saat" },
      { id: 3, title: "Yamac açısı, kənar yüklənməsi və acil təxliyə pəncərələri", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "lead-pmp",
    title: "Project Management Professional (PMP® Hazırlıq)",
    description: "Layihələrin beynəlxalq PMI standartları çərçivəsində idarə olunması: vaxt, büdcə, risk və heyət koordinasiyası üzrə qlobal PMP imtahan xidməti.",
    category: "Leadership",
    level: "Yüksək",
    duration: "36 saat / 6 Həftə",
    lessonsCount: 6,
    rating: 4.96,
    reviewsCount: 168,
    trainer: "Faiq Mustafayev",
    trainerRole: "PMP Certified Trainer & Business Consultant",
    price: 550,
    type: "Hibrid",
    certificateType: "PMI PMP Uyğunluq Sertifikatı (Exam Ready)",
    skillsOutcome: [
      "Layihə Scope, Schedule və Cost Baseline rəsmi cızılması",
      "Earned Value Management (EVM) analitik modelləri",
      "Agile, Predictive və Hybrid layihə idarəetmə metodologiyası"
    ],
    syllabus: [
      { id: 1, title: "Layihə idarəetmə mühiti və PMP imtahan strukturu", duration: "6 saat" },
      { id: 2, title: "İnsanlar (People): Konflikt, liderlik və komanda tərəqqisi", duration: "6 saat" },
      { id: 3, title: "Proseslər (Process): Gantt və Earned Value mühəndisliyi", duration: "6 saat" },
      { id: 4, title: "Biznes Mühiti (Business Environment): Hüquqi uyğunluq", duration: "6 saat" },
      { id: 5, title: "Agile və Hybrid ssenarilər, Scrum master rolu", duration: "6 saat" },
      { id: 6, title: "Simulyasiya imtahanı və PMP ərizə yazılı dəstək", duration: "6 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "dig-sql",
    title: "SQL Server (Biznes üçün Verilənlər Bazası)",
    description: "Müasir daxili analitiklər üçün SQL Server və PostgreSQL üzərində mürəkkəb sorğular, cədvəllərin joins, filtering və data təmizləmə ssenariləri.",
    category: "Digital Skills",
    level: "Orta",
    duration: "20 saat / 3 Həftə",
    lessonsCount: 5,
    rating: 4.87,
    reviewsCount: 154,
    trainer: "Leyla Kərimova",
    trainerRole: "Database Administrator & Senior SQL Architect",
    price: 180,
    type: "Onlayn",
    certificateType: "ATİM Rəqəmsal Sertifikat",
    skillsOutcome: [
      "Select, Where, Order By, Group By, Having, və Joins tam təhlili",
      "Subqueries, Common Table Expressions (CTE) mürəkkəb tətbiqi",
      "Biznes verilənlərinin təmizlənməsi və təkrar data süzgəci"
    ],
    syllabus: [
      { id: 1, title: "Verilənlər bazası anlayışı, cədvəllərin əlaqələnməsi (ERD)", duration: "4 saat" },
      { id: 2, title: "Fundamental SQL sorğuları və riyazi operatorlar", duration: "4 saat" },
      { id: 3, title: "Cədvəllərin birləşdirilməsi: Inner, Left, Right və Full Joins", duration: "4 saat" },
      { id: 4, title: "Aqreqat funksiyaları və dataların qruplaşdırılması", duration: "4 saat" },
      { id: 5, title: "Alt sorğular (Subqueries) və CTE mürəkkəb ssenari", duration: "4 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "dig-python",
    title: "Python ilə Data Analitika",
    description: "Proqramlaşdırma əsasları, Pandas, NumPy, Matplotlib və Seaborn kitabxanaları ilə sənaye verilənlərinin elmi analizi, bəzi proqnozlaşdırma mürəkkəb modelləri.",
    category: "Digital Skills",
    level: "Yüksək",
    duration: "36 saat / 5 Həftə",
    lessonsCount: 6,
    rating: 4.93,
    reviewsCount: 112,
    trainer: "Aysel Piriyeva",
    trainerRole: "Süni İntellekt rəhbəri, Pasha Holding",
    price: 320,
    type: "Onlayn",
    certificateType: "ATİM Proqramlaşdırma Sertifikatı",
    skillsOutcome: [
      "Python sintaksisi, lists, dictionaries, loops və funksiyalar",
      "DataFrame strukturu ilə böyük dataların Pandas vasitəsilə təmizlənməsi",
      "Vizual qrafiklərin (Seaborn, Matplotlib) elmi səviyyədə qurulması"
    ],
    syllabus: [
      { id: 1, title: "Python təməlləri, mühit qurulması (Jupyter Notebook)", duration: "6 saat" },
      { id: 2, title: " NumPy ilə çoxölçülü array-lər, riyazi hesablamalar", duration: "6 saat" },
      { id: 3, title: "Pandas-a giriş: Cədvəl verilənlərinin emalı və emalı addımları", duration: "6 saat" },
      { id: 4, title: "Məlumatların təmizlənməsi: missing values, remove duplicates", duration: "6 saat" },
      { id: 5, title: "Qrafik vizuallaşdırma: Paylanma, korelyasiya və trend analizləri", duration: "6 saat" },
      { id: 6, title: "Praktiki kəşfiyyat data analiziLayihə sənədləşməsi", duration: "6 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "hse-firstaid",
    title: "İlkin Tibbi Yardım (First Aid)",
    description: "Fövqəladə sənaye hadisələrində huşunu itirmiş, yaralanmış və ya zəhərlənmiş hər hansı bir şəxsə edilməsi mürəkkəb ilkin tibbi və reanimasiya (CPR) yardımı.",
    category: "HSE",
    level: "Başlanğıc",
    duration: "8 saat / 1 Gün",
    lessonsCount: 3,
    rating: 4.95,
    reviewsCount: 188,
    trainer: "Anar Qasımov",
    trainerRole: "Cərrah & Sertifikatlı First Aid Təlimçisi",
    price: 110,
    type: "Əyani",
    certificateType: "Beynəlxalq Təsdiqli First Aid / CPR Sertifikatı",
    skillsOutcome: [
      "Süni nəfəs və ürək masajı (CPR) ssenarilərinin tətbiqi",
      "Qanaxmaların dayandırılması və turna sənaye sarğı qaydaları",
      "Sınıqlar, zəhərlənmələr və yanıqlarda ilkin təxirəsalınmaz addımlar"
    ],
    syllabus: [
      { id: 1, title: "İlk tibbi yardım fəlsəfəsi, hadisə yerinin təhlükəsizliyi", duration: "3 saat" },
      { id: 2, title: "CPR dərsləri: Süni tənəffüs və defibrilyator (AED) istifadəsi", duration: "3 saat" },
      { id: 3, title: "Qanaxma, şok, asfiksiya (boğulma) sınaqları və acil təxliyə", duration: "2 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "eng-ndt-ut",
    title: "NDT Level II UT (Ultrasəs Sınağı)",
    description: "Sənayedə materialların daxili qüsurlarını ultrasəs dalğaları ilə yoxlayan rəsmi NDT Level II müfəttişlik proqramı.",
    category: "Inspection & Engineering",
    level: "Yüksək",
    duration: "40 saat / 5 Gün",
    lessonsCount: 5,
    rating: 4.94,
    reviewsCount: 42,
    trainer: "Kamran Əliyev",
    trainerRole: "SNT-TC-1A Level III NDT Expert",
    price: 490,
    type: "Əyani",
    certificateType: "PCN / ASNT Level II Ultrasəs Sertifikatı",
    skillsOutcome: [
      "Ultrasəs dalğa sürətinin kalibrlənməsi",
      "Qulaqcıq (probes) bucaq hesabı",
      "Yarpaq çatı və daxili metal deonvasiya analizi"
    ],
    syllabus: [
      { id: 1, title: "Ultrasəs sınağının fiziki dərk edilmələri, akustika", duration: "8 saat" },
      { id: 2, title: "Cihazların kalibrlənməsi, DAC əyrilərinin qurulması", duration: "8 saat" },
      { id: 3, title: "Bucaq altında yoxlama və qaynaq daxili tikişlərin müayinəsi", duration: "8 saat" },
      { id: 4, title: "Qüsurların təsnifləşdirilməsi və ölçüləndirilməsi", duration: "8 saat" },
      { id: 5, title: "PCN ssenarili praktiki sınaq laboratoriyası və imtahanı", duration: "8 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "eng-ndt-mt",
    title: "NDT Level II MT (Maqnit Tozu Sınağı)",
    description: "Ferromaqnit materialların səthi və səthaltı çatlarının maqnit sahəsi vasitəsilə təhlükəsiz təyin edilməsi kursu.",
    category: "Inspection & Engineering",
    level: "Orta",
    duration: "24 saat / 3 Gün",
    lessonsCount: 4,
    rating: 4.88,
    reviewsCount: 49,
    trainer: "Kamran Əliyev",
    trainerRole: "NDT Level III Müvəkkili",
    price: 320,
    type: "Əyani",
    certificateType: "ASNT Level II Maqnit Sertifikatı",
    skillsOutcome: [
      "Yoke (maqnit qövsü) cihazı ilə maqnit axınının tənzimlənməsi",
      "Quru və yaş floresan toz metodologiyası",
      "Metal səthində qüsurların vizual analizi"
    ],
    syllabus: [
      { id: 1, title: "Maqnit nəzəriyyəsi, induksiya sahələri", duration: "6 saat" },
      { id: 2, title: "Yoke maqnitlərinin qaldırma qabiliyyətinin (10 lbs) yoxlanılması", duration: "6 saat" },
      { id: 3, title: "Aktiv maqnit tozu ssenariləri və floresan qaranlıq otaq sınağı", duration: "6 saat" },
      { id: 4, title: "Yazılı qanunvericilik və hesabat bülleteni doldurulması", duration: "6 saat" }
    ],
    isEnrolled: false,
    progress: 0
  },
  {
    id: "eng-ndt-pt",
    title: "NDT Level II PT (Penetrant Sınağı)",
    description: "Sənaeydə material səthindəki mikroskopik çatların xüsusi rəngli maye nüfuzedicilərlə aşkarlanması.",
    category: "Inspection & Engineering",
    level: "Başlanğıc",
    duration: "16 saat / 2 Gün",
    lessonsCount: 3,
    rating: 4.84,
    reviewsCount: 51,
    trainer: "Kamran Əliyev",
    trainerRole: "NDT Müfəttiş rəhbəri",
    price: 280,
    type: "Əyani",
    certificateType: "ASNT Level II Penetrant Sürü Sertifikatı",
    skillsOutcome: [
      "Penetrant (nüfuzedici) boyaların və təmizləyicilərin tətbiqi",
      "İnkişaf etdirici (developer) toz püskürülməsi",
      "Səth qüsurlarının sənaye qeydiyyatı"
    ],
    syllabus: [
      { id: 1, title: "Penetrant nəzəriyyəsi, kapillyar cazibə fizika qabiliyyətləri", duration: "5 saat" },
      { id: 2, title: "Dwell time (gözləmə müddətləri) və təmizləmə ardıcıllığı", duration: "6 saat" },
      { id: 3, title: "Praktiki boyaq sınağı və fərdi sənaye qiymətləndirilməsi", duration: "5 saat" }
    ],
    isEnrolled: false,
    progress: 0
  }
];

export const SEEDED_MENTORS: Mentor[] = [
  {
    id: "m-1",
    name: "Tofiq Həsənov",
    role: "Baş HSE Menecer və Audit rəhbəri",
    company: "SOCAR - Caspian Petroleum",
    category: "HSE",
    rating: 4.9,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    hourlyRate: 40,
    experience: "15 ildən çox Sənaye Təhlükəsizliyi təcrübəsi. NEBOSH Diploma sahibi.",
    availableHours: ["Həftəiçi 18:00 - 19:00", "Şənbə 10:00 - 12:00"]
  },
  {
    id: "m-2",
    name: "Aysel Piriyeva",
    role: "Senior Data Scientist və Süni İntellekt rəhbəri",
    company: "Pasha Bank",
    category: "IT",
    rating: 4.85,
    reviewsCount: 29,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    hourlyRate: 50,
    experience: "Python, SQL, Machine Learning və böyük verilənlərin analizi sahəsində 8 il beynəlxalq təcrübə.",
    availableHours: ["Çərşənbə 19:30 - 21:00", "Bazar 15:00 - 17:00"]
  },
  {
    id: "m-3",
    name: "Rüfət Sadıxov",
    role: "Təchizat və Logistika rəhbəri",
    company: "Azərsun Holdinq",
    category: "Logistika",
    rating: 4.92,
    reviewsCount: 33,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    hourlyRate: 35,
    experience: "Xarici ticarət, gömrük və böyük anbar lojistik mərkəzlərinin idarə edilməsi sahəsində aparıcı mütəxəssis.",
    availableHours: ["Cümə axşamı 17:00 - 19:00", "Şənbə 14:00 - 16:00"]
  }
];

export const SEEDED_JOBS: JobVacancy[] = [
  {
    id: "job-1",
    title: "HSE (Sağlamlıq və Təhlükəsizlik) Müfəttişi",
    company: "SOCAR Downstream",
    logo: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80&w=100",
    category: "HSE",
    location: "Bakı, Səbail / Neftçilər prospekti",
    salary: "1500 - 2200 AZN",
    type: "Əyani",
    description: "Sənaye sahəsində gündəlik risklərin nəzarəti, qaynar iş icazələrinin (Work Permit) yoxlanılması, audit planlaşdırılması.",
    requirements: [
      "Əməyin mühafizəsi və texniki təhlükəsizlik sahəsində ən azı 2 il iş təcrübəsi",
      "ATİM və ya NEBOSH tərəfindən təsdiq olunmuş HSE sertifikatı mütləqdir",
      "Risklərin idarə edilməsi və təlimatlandırma bacarığı"
    ],
    skillsMatch: 85
  },
  {
    id: "job-2",
    title: "Təchizat Zənciri və Anbar Koordinatoru",
    company: "Azərsun Logistics",
    logo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=100",
    category: "Logistika",
    location: "Xırdalan anbar mərkəzi",
    salary: "1200 - 1600 AZN",
    type: "Əyani",
    description: "Mal qəbulunun ERP sistemində idarə edilməsi, minimal stok limitlərinin tənzimlənməsi, logistika marşrutlarının monitorinqi.",
    requirements: [
      "Müvafiq lojistik / anbar idarəetməsi sahəsində 1-3 il təcrübə",
      "Xüsusi ERP (SAP və ya 1C xidmətləri) bilikləri",
      "Gömrükvə Incoterms qaydalarından təməl məlumatlılıq"
    ],
    skillsMatch: 60
  },
  {
    id: "job-3",
    title: "Junior / Mid Data Analitik",
    company: "PASHA Bank",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=100",
    category: "IT",
    location: "Bakı, Port Baku Office",
    salary: "1800 - 2500 AZN",
    type: "Hibrid",
    description: "İqtisadi daxili data üzərindən SQL sorğuları ilə verilənlərin çəkilməsi, Power BI hesabatlarının vizuallaşdırılması, maliyyə trendlərinin izlənməsi.",
    requirements: [
      "SQL üzrə yüksək səviyyəli sorğu tərtib bilikləri (Join, group by, subqueries)",
      "Power BI/Tableau platformasında dinamik dashboard hazırlama təcrübəsi",
      "Riyazi təhlil və biznes analitikası dünyagörüşü"
    ],
    skillsMatch: 40
  }
];

export const CORPORATE_INITIAL_EMPLOYEES: CorporateEmployee[] = [
  {
    id: "emp-101",
    name: "Tural Quliyev",
    email: "tural.q@company.az",
    department: "Dəniz Nəqliyyat Departamenti",
    complianceStatus: "Tətbiq Edilib",
    assignedCourses: ["hse-iosh"],
    progress: { "hse-iosh": 100 },
    certificatesCount: 1
  },
  {
    id: "emp-102",
    name: "Leyla Məmmədova",
    email: "leyla.m@company.az",
    department: "SAT - Təchizat və Lojistika",
    complianceStatus: "Növbədə",
    assignedCourses: ["lift-rigger"],
    progress: { "lift-rigger": 45 },
    certificatesCount: 0
  },
  {
    id: "emp-103",
    name: "Rüfət Nağıyev",
    email: "rufat.n@company.az",
    department: "Tikinti və Sahə İdarəetməsi",
    complianceStatus: "Gecikir",
    assignedCourses: ["hse-iosh"],
    progress: { "hse-iosh": 15 },
    certificatesCount: 0
  },
  {
    id: "emp-104",
    name: "Kamran Mehdiyev",
    email: "kamran.m@company.az",
    department: "Data Analitika və Biznes İntellekti",
    complianceStatus: "Tətbiq Edilib",
    assignedCourses: ["dig-powerbi"],
    progress: { "dig-powerbi": 100 },
    certificatesCount: 1
  }
];

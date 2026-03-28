export type Lang = "en" | "ar";

export const isArabic = (lang: string | undefined): lang is Lang => lang === "ar";

export const getLang = (lang?: string): Lang => (isArabic(lang) ? "ar" : "en");

export const siteContent = {
  en: {
    meta: {
      title: "Take a Sip | Coffee Ordering App",
      description:
        "Premium coffee ordering app for pickup and delivery, with loyalty rewards, fast checkout, and live order tracking.",
    },
    brandTagline: "Coffee ordering app",
    nav: {
      features: "Features",
      howItWorks: "How it works",
      rewards: "Rewards",
      privacy: "Privacy",
      terms: "Terms",
    },
    hero: {
      eyebrow: "Coffee ordering, refined",
      title: "Your favorite cafe, ready before you arrive.",
      description:
        "Take a Sip helps customers browse the full menu, customize every drink, pay in seconds, and track pickup or delivery with confidence.",
      primaryCta: "Download the app",
      secondaryCta: "View privacy policy",
      stats: [
        { value: "3 min", label: "average reorder flow" },
        { value: "24/7", label: "order tracking visibility" },
        { value: "1 app", label: "pickup, delivery, rewards" },
      ],
      highlights: ["Faster pre-orders", "Premium rewards UX", "Store-review ready"],
      featuredLabel: "Featured",
      featuredText: "Caramel Latte trending",
    },
    features: {
      title: "Built for busy mornings and repeat customers",
      description:
        "Everything customers expect from a modern coffee experience, packaged in a fast and familiar mobile flow.",
      items: [
        {
          title: "Flexible ordering",
          description:
            "Browse sections, choose sizes, add extras, and place pickup or delivery orders without friction.",
        },
        {
          title: "Easy sign in",
          description:
            "Secure access with OTP, Google, or Apple so customers can place an order in moments.",
        },
        {
          title: "Live order updates",
          description:
            "Clear order status from confirmation to handoff, helping customers plan every stop.",
        },
        {
          title: "Loyalty that feels worth it",
          description:
            "Points, promotions, and seasonal offers designed to reward repeat visits and larger baskets.",
        },
      ],
    },
    how: {
      title: "How it works",
      steps: [
        {
          title: "Choose your order",
          description: "Select drinks, pastries, sizes, and add-ons from a clean menu flow.",
        },
        {
          title: "Pay and schedule",
          description: "Pick pickup or delivery, confirm details, and check out in a few taps.",
        },
        {
          title: "Track and enjoy",
          description: "Follow progress in real time and collect rewards with every completed order.",
        },
      ],
    },
    showcase: {
      label: "UI Showcase",
      title: "A product experience customers trust at first glance",
      description:
        "Premium UI patterns, readable hierarchy, and familiar checkout moments help the app feel polished from day one.",
    },
    rewards: {
      title: "Promotions that drive frequency",
      description:
        "Launch with welcome offers, birthday treats, and tiered rewards to turn first orders into regular habits.",
      bullets: [
        "Earn points automatically on every paid order",
        "Unlock member-only drinks and limited promotions",
        "Redeem rewards directly inside the order flow",
      ],
    },
    download: {
      title: "Ready for the App Store and Google Play",
      description:
        "A clean, compliant website gives customers confidence before they ever install the app.",
    },
    footer: {
      description:
        "Take a Sip is a coffee ordering app built for pickup, delivery, and loyalty-powered growth.",
      rights: "All rights reserved.",
    },
    legal: {
      brandName: "Take a Sip",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      effectiveDate: "Effective date: March 29, 2026",
    },
  },
  ar: {
    meta: {
      title: "خذلك شفة | تطبيق طلب القهوة",
      description:
        "تطبيق طلب قهوة يمنح العملاء تجربة سلسة للطلب المسبق، التوصيل، تتبع الطلبات، وبرنامج ولاء متكامل.",
    },
    brandTagline: "تطبيق طلب القهوة",
    nav: {
      features: "المزايا",
      howItWorks: "آلية الاستخدام",
      rewards: "الولاء",
      privacy: "الخصوصية",
      terms: "الشروط",
    },
    hero: {
      eyebrow: "تجربة طلب قهوة راقية",
      title: "قهوتك المفضلة جاهزة قبل وصولك.",
      description:
        "يمنحك تطبيق خذلك شفة تجربة سهلة لتصفح القائمة، تخصيص المشروبات، الدفع بسرعة، وتتبع طلبات الاستلام أو التوصيل بكل وضوح.",
      primaryCta: "حمّل التطبيق",
      secondaryCta: "اطّلع على سياسة الخصوصية",
      stats: [
        { value: "3 دقائق", label: "لمتوسط إعادة الطلب" },
        { value: "24/7", label: "لتتبع حالة الطلب" },
        { value: "تطبيق واحد", label: "للاستلام والتوصيل والمكافآت" },
      ],
      highlights: ["طلبات مسبقة أسرع", "واجهة ولاء راقية", "جاهز لمراجعة المتاجر"],
      featuredLabel: "عرض مميز",
      featuredText: "لاتيه الكراميل الأكثر طلباً",
    },
    features: {
      title: "مصمم لوتيرة الحياة السريعة والعملاء الدائمين",
      description:
        "كل ما يتوقعه العميل من تجربة قهوة عصرية، ضمن تدفق استخدام سريع وواضح وموثوق.",
      items: [
        {
          title: "طلب مرن وسلس",
          description:
            "تصفح الأقسام، اختر الحجم، أضف الإضافات، وحدد الاستلام أو التوصيل بسهولة.",
        },
        {
          title: "دخول سريع وآمن",
          description:
            "تسجيل الدخول عبر رمز التحقق أو حساب Google أو Apple لتجربة استخدام مريحة.",
        },
        {
          title: "تتبع مباشر للطلبات",
          description:
            "حالة واضحة للطلب من لحظة التأكيد وحتى التسليم أو الاستلام من الفرع.",
        },
        {
          title: "برنامج ولاء فعّال",
          description:
            "نقاط ومكافآت وعروض موسمية تشجع العملاء على العودة ورفع قيمة الطلب.",
        },
      ],
    },
    how: {
      title: "كيف يعمل التطبيق",
      steps: [
        {
          title: "اختر طلبك",
          description: "تصفح المشروبات والمخبوزات، وحدد الحجم والإضافات ضمن واجهة مرتبة.",
        },
        {
          title: "أكد الطلب وادفع",
          description: "حدد الاستلام أو التوصيل، راجع التفاصيل، وأكمل الدفع خلال خطوات بسيطة.",
        },
        {
          title: "تابع واستمتع",
          description: "راقب حالة الطلب مباشرة واحصل على نقاط الولاء مع كل عملية مكتملة.",
        },
      ],
    },
    showcase: {
      label: "واجهة التطبيق",
      title: "تجربة موثوقة تعكس جودة المنتج من أول نظرة",
      description:
        "واجهة راقية، هرم بصري واضح، وخطوات مألوفة تمنح التطبيق انطباعاً احترافياً جاهزاً للإطلاق.",
    },
    rewards: {
      title: "عروض وبرنامج ولاء يدعمان تكرار الطلب",
      description:
        "ابدأ بعروض ترحيبية ومكافآت موسمية ومستويات ولاء تشجع العميل على العودة باستمرار.",
      bullets: [
        "اكتساب النقاط تلقائياً مع كل طلب مدفوع",
        "الوصول إلى عروض حصرية ومشروبات موسمية للأعضاء",
        "استخدام المكافآت مباشرة أثناء إتمام الطلب",
      ],
    },
    download: {
      title: "جاهز للعرض على App Store وGoogle Play",
      description:
        "موقع واضح ومتوافق يعزز ثقة العميل بالتطبيق قبل تحميله لأول مرة.",
    },
    footer: {
      description:
        "خذلك شفة هو تطبيق طلب قهوة مصمم للاستلام والتوصيل وتعزيز ولاء العملاء.",
      rights: "جميع الحقوق محفوظة.",
    },
    legal: {
      brandName: "خذلك شفة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      effectiveDate: "تاريخ النفاذ: 29 مارس 2026",
    },
  },
} as const;

export const privacyPolicy = {
  en: [
    {
      title: "Introduction",
      paragraphs: [
        "Take a Sip respects the privacy of its customers and users. This Privacy Policy explains how we collect, use, store, and protect personal information when you use our website, mobile application, and related services for coffee ordering, loyalty rewards, pickup, and delivery.",
        "This policy is intended to provide a clear explanation of our data practices and to support transparency for users, platform reviewers, and regulatory stakeholders. By using Take a Sip, you acknowledge that your information will be handled as described in this Privacy Policy.",
      ],
    },
    {
      title: "Information We Collect",
      paragraphs: [
        "We may collect personal information that you provide directly to us, including your name, phone number, and email address where email is used for account access, communication, receipts, or support.",
        "We also collect order-related information such as selected items, drink sizes, add-ons, delivery or pickup preferences, loyalty activity, order history, and transaction details necessary to complete your requests.",
        "In addition, we may collect basic device and usage data such as device type, operating system, application version, language preference, crash information, IP address, and general interaction data to maintain and improve the service.",
      ],
    },
    {
      title: "How We Use Information",
      paragraphs: [
        "We use the information we collect to process orders, confirm purchases, arrange pickup or delivery, communicate order status, and administer loyalty rewards and promotions.",
        "Your information may also be used to authenticate your account through one-time passcodes, Google sign-in, or Apple sign-in, to provide customer support, to respond to requests, and to troubleshoot technical issues.",
        "We may analyze aggregated or limited usage data to improve performance, menu presentation, reliability, app experience, and overall service quality.",
      ],
    },
    {
      title: "Data Sharing",
      paragraphs: [
        "We do not sell your personal information to third parties.",
        "We may share limited information when necessary with delivery personnel or dispatch partners to complete a delivery order, and with trusted service providers that help us operate the service, such as hosting providers, analytics vendors, customer communication tools, payment processors, and notification services.",
        "These providers are expected to use the information only as needed to perform services on our behalf and under appropriate confidentiality and security obligations.",
      ],
    },
    {
      title: "Data Security",
      paragraphs: [
        "We use reasonable administrative, technical, and organizational security measures designed to protect personal information from unauthorized access, misuse, alteration, disclosure, or loss. No system can be guaranteed to be completely secure, but we work to maintain safeguards appropriate to the nature of the information we process.",
      ],
    },
    {
      title: "Data Retention",
      paragraphs: [
        "We retain personal information for as long as reasonably necessary to provide the service, maintain user accounts, comply with legal or operational requirements, resolve disputes, enforce our agreements, and support legitimate business records related to orders and support requests.",
      ],
    },
    {
      title: "Your Rights",
      paragraphs: [
        "Subject to applicable law, you may request access to the personal information we hold about you and may request correction or deletion of your data where appropriate. We may need to verify your identity before fulfilling certain requests.",
      ],
    },
    {
      title: "Cookies and Tracking",
      paragraphs: [
        "Our website may use cookies or similar technologies for basic analytics, language preferences, site functionality, and performance monitoring. You can manage certain browser-based cookie preferences through your device or browser settings.",
      ],
    },
    {
      title: "Contact Information",
      paragraphs: [
        "For privacy-related questions, requests, or complaints, please contact us at support@yourapp.com.",
      ],
    },
    {
      title: "Jurisdiction",
      paragraphs: [
        "This Privacy Policy shall be interpreted in accordance with the laws and regulations applicable in the Hashemite Kingdom of Jordan. Any dispute relating to privacy, data use, or related matters may be subject to the competent authorities or courts in Jordan, unless applicable law requires otherwise.",
      ],
    },
  ],
  ar: [
    {
      title: "المقدمة",
      paragraphs: [
        "تحترم خذلك شفة خصوصية العملاء والمستخدمين، وتهدف هذه السياسة إلى توضيح كيفية جمع المعلومات الشخصية واستخدامها وحفظها وحمايتها عند استخدام الموقع الإلكتروني أو التطبيق أو أي خدمات مرتبطة بطلب القهوة والاستلام والتوصيل وبرنامج الولاء.",
        "تم إعداد هذه السياسة بصياغة واضحة لتعزيز الشفافية أمام المستخدمين وجهات المراجعة والمتطلبات التنظيمية. وباستخدامك لخدمات خذلك شفة، فإنك تقر بأن معلوماتك ستتم معالجتها وفقاً لما هو وارد في هذه السياسة.",
      ],
    },
    {
      title: "المعلومات التي نجمعها",
      paragraphs: [
        "قد نجمع معلومات يقدمها المستخدم مباشرة، وتشمل الاسم ورقم الهاتف والبريد الإلكتروني في حال تم استخدامه للدخول إلى الحساب أو للتواصل أو لإرسال الإيصالات أو لخدمة الدعم.",
        "كما نجمع بيانات متعلقة بالطلبات، مثل الأصناف المختارة، أحجام المشروبات، الإضافات، تفضيلات الاستلام أو التوصيل، نشاط الولاء، سجل الطلبات، وبيانات المعاملة اللازمة لتنفيذ الطلب.",
        "وقد نجمع أيضاً بيانات أساسية عن الجهاز والاستخدام، مثل نوع الجهاز، نظام التشغيل، إصدار التطبيق، لغة الاستخدام، معلومات الأعطال، عنوان IP، وبعض بيانات التفاعل العامة بهدف تشغيل الخدمة وتحسينها.",
      ],
    },
    {
      title: "كيفية استخدام المعلومات",
      paragraphs: [
        "نستخدم المعلومات التي نجمعها لمعالجة الطلبات، تأكيد عمليات الشراء، ترتيب الاستلام أو التوصيل، إرسال تحديثات حالة الطلب، وإدارة برامج الولاء والعروض الترويجية.",
        "كما قد نستخدم المعلومات للتحقق من هوية المستخدم عبر رمز التحقق لمرة واحدة أو تسجيل الدخول بواسطة Google أو Apple، ولتقديم الدعم الفني وخدمة العملاء والاستجابة للاستفسارات ومعالجة المشكلات التقنية.",
        "وقد نحلل بيانات استخدام مجمعة أو محدودة لتحسين الأداء، وطريقة عرض القائمة، وموثوقية الخدمة، وتجربة التطبيق بشكل عام.",
      ],
    },
    {
      title: "مشاركة البيانات",
      paragraphs: [
        "لا تقوم خذلك شفة ببيع البيانات الشخصية إلى أي طرف ثالث.",
        "قد نشارك الحد الأدنى من المعلومات عند الحاجة مع مندوبي التوصيل أو الجهات التشغيلية المرتبطة بالتوصيل لإتمام الطلب، كما قد نشاركها مع مزودي خدمات موثوقين يساعدوننا في تشغيل المنصة، مثل مزودي الاستضافة، وخدمات الإشعارات، وأدوات التواصل مع العملاء، ومعالجي المدفوعات، ومزودي التحليلات.",
        "يلتزم هؤلاء المزودون باستخدام المعلومات فقط بالقدر اللازم لتقديم الخدمة نيابةً عنا ووفق التزامات مناسبة تتعلق بالسرية والأمن.",
      ],
    },
    {
      title: "أمن البيانات",
      paragraphs: [
        "نعتمد إجراءات إدارية وتقنية وتنظيمية معقولة تهدف إلى حماية المعلومات الشخصية من الوصول غير المصرح به أو سوء الاستخدام أو التعديل أو الإفصاح أو الفقدان. ورغم أنه لا يمكن ضمان الأمان الكامل لأي نظام، فإننا نحرص على تطبيق وسائل حماية مناسبة لطبيعة البيانات التي نعالجها.",
      ],
    },
    {
      title: "الاحتفاظ بالبيانات",
      paragraphs: [
        "نحتفظ بالمعلومات الشخصية طالما كان ذلك ضرورياً بشكل معقول لتقديم الخدمة، وإدارة الحسابات، والالتزام بالمتطلبات القانونية أو التشغيلية، وتسوية النزاعات، وتنفيذ الاتفاقيات، والاحتفاظ بالسجلات المرتبطة بالطلبات أو طلبات الدعم.",
      ],
    },
    {
      title: "حقوق المستخدم",
      paragraphs: [
        "وفقاً لما يسمح به القانون المعمول به، يمكن للمستخدم طلب الوصول إلى بياناته الشخصية أو طلب تصحيحها أو حذفها عند الاقتضاء. وقد نطلب التحقق من الهوية قبل الاستجابة لبعض الطلبات.",
      ],
    },
    {
      title: "ملفات تعريف الارتباط والتتبع",
      paragraphs: [
        "قد يستخدم الموقع ملفات تعريف الارتباط أو تقنيات مشابهة لأغراض أساسية مثل التحليلات العامة، وتفضيلات اللغة، ووظائف الموقع، ومراقبة الأداء. ويمكن للمستخدم إدارة بعض تفضيلات ملفات الارتباط من خلال إعدادات المتصفح أو الجهاز.",
      ],
    },
    {
      title: "معلومات التواصل",
      paragraphs: [
        "للاستفسارات أو الطلبات أو الشكاوى المتعلقة بالخصوصية، يمكن التواصل معنا عبر البريد الإلكتروني: support@yourapp.com.",
      ],
    },
    {
      title: "الاختصاص القضائي",
      paragraphs: [
        "تُفسر هذه السياسة وفقاً للقوانين والأنظمة المعمول بها في المملكة الأردنية الهاشمية، وتخضع أي نزاعات تتعلق بالخصوصية أو استخدام البيانات أو ما يرتبط بها لاختصاص الجهات أو المحاكم المختصة في الأردن، ما لم يقتضِ القانون الواجب التطبيق خلاف ذلك.",
      ],
    },
  ],
} as const;

export const termsOfService = {
  en: [
    {
      title: "Introduction",
      paragraphs: [
        "These Terms of Service govern access to and use of the Take a Sip website, mobile application, and related services. By creating an account, placing an order, or otherwise using the service, you agree to be bound by these Terms.",
      ],
    },
    {
      title: "Account Rules",
      paragraphs: [
        "You are responsible for providing accurate account information and for maintaining the confidentiality of your login methods, including one-time passcodes and third-party sign-in credentials.",
        "You agree not to use the service for unlawful purposes, fraudulent activity, abusive conduct, or any activity that could interfere with the platform, business operations, or other users.",
      ],
    },
    {
      title: "Orders and Payments",
      paragraphs: [
        "Orders placed through Take a Sip are requests for products subject to availability, store operating hours, and acceptance by the merchant. Prices, menu availability, promotions, and preparation times may change from time to time.",
        "You are responsible for reviewing your order before submission. Once an order is confirmed, modifications or cancellations may not be possible depending on preparation status, payment status, and operational timing.",
        "Payments must be made using approved methods presented in the app or service. Refunds, where applicable, will be handled in accordance with our internal process, payment provider requirements, and the specific circumstances of the order.",
      ],
    },
    {
      title: "Delivery Disclaimer",
      paragraphs: [
        "Estimated delivery times are provided for convenience only and may be affected by traffic, weather, store volume, rider availability, or other circumstances outside our reasonable control.",
        "For delivery orders, you are responsible for providing accurate location and contact details. Delays or failed deliveries caused by incorrect information, unresponsiveness, or access limitations may affect the outcome of the order.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, Take a Sip shall not be liable for indirect, incidental, consequential, special, or punitive damages, including loss of profits, loss of data, or loss of business arising out of or related to the use of the service.",
        "Our total liability for any claim relating to the service shall not exceed the amount paid for the specific order giving rise to the claim, except where a different limit is required by applicable law.",
      ],
    },
    {
      title: "Suspension and Termination",
      paragraphs: [
        "We may suspend, restrict, or terminate access to the service if we reasonably believe that a user has violated these Terms, engaged in misuse, attempted fraud, harmed other users, or created risk for the business, the platform, or service providers.",
      ],
    },
    {
      title: "Governing Law",
      paragraphs: [
        "These Terms shall be governed by and construed in accordance with the laws of the Hashemite Kingdom of Jordan. Any dispute arising from or related to these Terms or the service shall be subject to the competent courts in Jordan, unless otherwise required by applicable law.",
      ],
    },
  ],
  ar: [
    {
      title: "المقدمة",
      paragraphs: [
        "تنظم شروط الاستخدام هذه الوصول إلى موقع خذلك شفة الإلكتروني وتطبيقه وخدماته المرتبطة. ويُعد إنشاء الحساب أو تقديم الطلب أو استخدام الخدمة بأي صورة موافقة على الالتزام بهذه الشروط.",
      ],
    },
    {
      title: "قواعد استخدام الحساب",
      paragraphs: [
        "يتحمل المستخدم مسؤولية تقديم معلومات صحيحة ودقيقة عند إنشاء الحساب أو استخدامه، كما يتحمل مسؤولية الحفاظ على سرية وسائل الدخول، بما في ذلك رموز التحقق لمرة واحدة وبيانات تسجيل الدخول عبر الجهات الخارجية.",
        "ويتعهد المستخدم بعدم استخدام الخدمة لأي غرض غير مشروع أو احتيالي أو مسيء، أو بأي طريقة قد تؤثر سلباً على المنصة أو العمليات التشغيلية أو باقي المستخدمين.",
      ],
    },
    {
      title: "الطلبات والمدفوعات",
      paragraphs: [
        "تُعد الطلبات المقدمة عبر خذلك شفة طلبات شراء خاضعة لتوفر المنتجات، وساعات عمل المتجر، وقبول الجهة المقدمة للخدمة. وقد تتغير الأسعار، وتوفر الأصناف، والعروض، ومدة التحضير من وقت إلى آخر.",
        "يتحمل المستخدم مسؤولية مراجعة الطلب قبل تأكيده. وبعد تأكيد الطلب، قد لا يكون من الممكن تعديله أو إلغاؤه بحسب حالة التحضير أو الدفع أو التوقيت التشغيلي.",
        "يجب إتمام المدفوعات عبر الوسائل المعتمدة الظاهرة داخل التطبيق أو الخدمة. وتتم معالجة أي استرداد مستحق وفق الإجراءات الداخلية ومتطلبات مزود الدفع وظروف الطلب محل المعالجة.",
      ],
    },
    {
      title: "إخلاء مسؤولية التوصيل",
      paragraphs: [
        "تُعرض أوقات التوصيل المتوقعة لأغراض تقديرية فقط، وقد تتأثر بحركة المرور أو الأحوال الجوية أو ضغط العمل في المتجر أو توفر مندوبي التوصيل أو أي ظروف خارجة عن السيطرة المعقولة.",
        "وفي طلبات التوصيل، يلتزم المستخدم بتقديم موقع صحيح ووسائل تواصل دقيقة. وقد يؤدي إدخال معلومات غير صحيحة أو عدم الاستجابة أو صعوبات الوصول إلى تأخير الطلب أو تعذر تسليمه.",
      ],
    },
    {
      title: "تحديد المسؤولية",
      paragraphs: [
        "إلى أقصى حد يسمح به القانون المعمول به، لا تتحمل خذلك شفة المسؤولية عن أي أضرار غير مباشرة أو عرضية أو تبعية أو خاصة أو تأديبية، بما في ذلك خسارة الأرباح أو البيانات أو الأعمال، الناتجة عن استخدام الخدمة أو المرتبطة بها.",
        "ويقتصر الحد الأقصى للمسؤولية عن أي مطالبة تتعلق بالخدمة على قيمة الطلب محل المطالبة، ما لم يتطلب القانون الساري خلاف ذلك.",
      ],
    },
    {
      title: "تعليق الحساب أو إنهاؤه",
      paragraphs: [
        "يجوز لنا تعليق أو تقييد أو إنهاء الوصول إلى الخدمة إذا تبين لنا بشكل معقول أن المستخدم خالف هذه الشروط، أو أساء استخدام المنصة، أو حاول القيام بسلوك احتيالي، أو ألحق ضرراً بالمستخدمين الآخرين، أو تسبب في مخاطر على النشاط أو المنصة أو مزودي الخدمة.",
      ],
    },
    {
      title: "القانون الواجب التطبيق",
      paragraphs: [
        "تخضع هذه الشروط وتُفسر وفقاً لقوانين المملكة الأردنية الهاشمية، وتختص المحاكم الأردنية بالنظر في أي نزاع ينشأ عنها أو يرتبط بها أو باستخدام الخدمة، ما لم يقضِ القانون الواجب التطبيق بخلاف ذلك.",
      ],
    },
  ],
} as const;

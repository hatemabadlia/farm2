// ⚠️ À COMPLÉTER PAR FCS AVANT MISE EN LIGNE ⚠️
// Les valeurs ci-dessous entre [crochets] sont des emplacements a remplir
// avec les informations legales reelles de la societe (RC, NIF, adresse,
// hebergeur, DPO...). Un site commercial en Algerie / UE doit afficher ces
// mentions : ne pas publier la page tant qu'elles ne sont pas renseignees.

import { CONTACT } from '../../config/contact.js';

const COMPANY = {
  name: 'Farm Control System',
  legalForm: '[Forme juridique — ex. SARL]',
  capital: '[Capital social]',
  address: '[Adresse complète du siège social]',
  rc: '[N° Registre de Commerce]',
  nif: '[N° d\'Identification Fiscale]',
  director: '[Nom du directeur de la publication]',
  email: CONTACT.email,
  phone: CONTACT.phoneDisplay,
  host: '[Nom et adresse de l\'hébergeur]',
};

const UPDATED = '2026-09-28';

const dict = {
  fr: {
    legalNotice: {
      title: 'Mentions légales',
      updated: `Dernière mise à jour : ${UPDATED}`,
      sections: [
        {
          heading: "Éditeur du site",
          body: [
            `${COMPANY.name} — ${COMPANY.legalForm} au capital de ${COMPANY.capital}.`,
            `Siège social : ${COMPANY.address}.`,
            `RC : ${COMPANY.rc} — NIF : ${COMPANY.nif}.`,
            `Directeur de la publication : ${COMPANY.director}.`,
            `Contact : ${COMPANY.email} — ${COMPANY.phone}.`,
          ],
        },
        {
          heading: 'Hébergement',
          body: [`Le site est hébergé par ${COMPANY.host}.`],
        },
        {
          heading: 'Propriété intellectuelle',
          body: [
            "L'ensemble des contenus présents sur ce site (textes, images, logos, marques, éléments graphiques et logiciels) est la propriété exclusive de Farm Control System ou de ses partenaires, et est protégé par la législation relative à la propriété intellectuelle.",
            "Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite.",
          ],
        },
        {
          heading: 'Responsabilité',
          body: [
            "Farm Control System s'efforce d'assurer l'exactitude des informations publiées sur ce site, sans pouvoir garantir qu'elles soient exhaustives ou exemptes d'erreur. Les informations sont fournies à titre indicatif et peuvent être modifiées à tout moment.",
          ],
        },
      ],
    },
    privacy: {
      title: 'Politique de confidentialité',
      updated: `Dernière mise à jour : ${UPDATED}`,
      sections: [
        {
          heading: 'Données collectées',
          body: [
            "Lorsque vous remplissez le formulaire de demande de démonstration, nous collectons les informations que vous nous transmettez : nom, entreprise, adresse email, téléphone, fonction, type de besoin et message.",
            "Aucune donnée n'est collectée à votre insu et le site n'utilise pas de cookies de suivi publicitaire.",
          ],
        },
        {
          heading: 'Finalité du traitement',
          body: [
            "Ces données sont utilisées uniquement pour répondre à votre demande, vous présenter la solution Farm Control System et assurer le suivi commercial associé. Elles ne sont ni vendues, ni louées, ni cédées à des tiers.",
          ],
        },
        {
          heading: 'Durée de conservation',
          body: [
            'Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées pour une durée maximale de trois (3) ans à compter du dernier contact.',
          ],
        },
        {
          heading: 'Vos droits',
          body: [
            `Vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données. Pour l'exercer, écrivez à ${COMPANY.email}.`,
          ],
        },
      ],
    },
  },

  en: {
    legalNotice: {
      title: 'Legal notice',
      updated: `Last updated: ${UPDATED}`,
      sections: [
        {
          heading: 'Site publisher',
          body: [
            `${COMPANY.name} — ${COMPANY.legalForm}, share capital ${COMPANY.capital}.`,
            `Registered office: ${COMPANY.address}.`,
            `Trade register: ${COMPANY.rc} — Tax ID: ${COMPANY.nif}.`,
            `Publication director: ${COMPANY.director}.`,
            `Contact: ${COMPANY.email} — ${COMPANY.phone}.`,
          ],
        },
        {
          heading: 'Hosting',
          body: [`This website is hosted by ${COMPANY.host}.`],
        },
        {
          heading: 'Intellectual property',
          body: [
            'All content on this site (texts, images, logos, trademarks, graphics and software) is the exclusive property of Farm Control System or its partners and is protected by intellectual property law.',
            'Any reproduction, representation, modification or use, in whole or in part, without prior written authorization is prohibited.',
          ],
        },
        {
          heading: 'Liability',
          body: [
            'Farm Control System strives to ensure the accuracy of the information published on this site but cannot guarantee that it is exhaustive or error-free. Information is provided for guidance only and may be changed at any time.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      updated: `Last updated: ${UPDATED}`,
      sections: [
        {
          heading: 'Data we collect',
          body: [
            'When you fill in the demo request form, we collect the information you provide: name, company, email address, phone number, role, type of need and message.',
            'No data is collected without your knowledge, and this site does not use advertising tracking cookies.',
          ],
        },
        {
          heading: 'Purpose of processing',
          body: [
            'This data is used solely to answer your request, present the Farm Control System solution and carry out the related commercial follow-up. It is never sold, rented or transferred to third parties.',
          ],
        },
        {
          heading: 'Retention period',
          body: [
            'Your data is kept for as long as needed to handle your request, then archived for a maximum of three (3) years from the last contact.',
          ],
        },
        {
          heading: 'Your rights',
          body: [
            `You have the right to access, correct, object to and delete your data. To exercise it, write to ${COMPANY.email}.`,
          ],
        },
      ],
    },
  },

  ar: {
    legalNotice: {
      title: 'الإشعارات القانونية',
      updated: `آخر تحديث: ${UPDATED}`,
      sections: [
        {
          heading: 'ناشر الموقع',
          body: [
            `${COMPANY.name} — ${COMPANY.legalForm}، برأس مال ${COMPANY.capital}.`,
            `المقر الاجتماعي: ${COMPANY.address}.`,
            `السجل التجاري: ${COMPANY.rc} — الرقم الجبائي: ${COMPANY.nif}.`,
            `مدير النشر: ${COMPANY.director}.`,
            `الاتصال: ${COMPANY.email} — ${COMPANY.phone}.`,
          ],
        },
        {
          heading: 'الاستضافة',
          body: [`الموقع مستضاف لدى ${COMPANY.host}.`],
        },
        {
          heading: 'الملكية الفكرية',
          body: [
            'جميع المحتويات الموجودة في هذا الموقع (نصوص، صور، شعارات، علامات، عناصر رسومية وبرمجيات) هي ملكية حصرية لـ Farm Control System أو لشركائه، ومحمية بموجب تشريعات الملكية الفكرية.',
            'يُمنع أي استنساخ أو تمثيل أو تعديل أو استغلال، كلي أو جزئي، دون إذن كتابي مسبق.',
          ],
        },
        {
          heading: 'المسؤولية',
          body: [
            'تحرص Farm Control System على ضمان دقة المعلومات المنشورة في هذا الموقع، دون أن تضمن أنها شاملة أو خالية من الأخطاء. تُقدَّم المعلومات على سبيل الإرشاد ويمكن تعديلها في أي وقت.',
          ],
        },
      ],
    },
    privacy: {
      title: 'سياسة الخصوصية',
      updated: `آخر تحديث: ${UPDATED}`,
      sections: [
        {
          heading: 'المعطيات المجمَّعة',
          body: [
            'عند ملء استمارة طلب العرض التوضيحي، نجمع المعلومات التي ترسلها إلينا: الاسم، المؤسسة، البريد الإلكتروني، الهاتف، الوظيفة، نوع الحاجة والرسالة.',
            'لا تُجمع أي معطيات دون علمك، ولا يستعمل الموقع ملفات تتبع إشهارية.',
          ],
        },
        {
          heading: 'الغرض من المعالجة',
          body: [
            'تُستعمل هذه المعطيات حصراً للرد على طلبك، وتقديم حل Farm Control System، وضمان المتابعة التجارية المرتبطة به. ولا تُباع ولا تُؤجَّر ولا تُحوَّل إلى أطراف أخرى.',
          ],
        },
        {
          heading: 'مدة الحفظ',
          body: [
            'تُحفظ معطياتك طوال المدة اللازمة لمعالجة طلبك، ثم تُؤرشف لمدة أقصاها ثلاث (3) سنوات ابتداءً من آخر اتصال.',
          ],
        },
        {
          heading: 'حقوقك',
          body: [
            `لك الحق في الاطلاع على معطياتك وتصحيحها والاعتراض عليها وحذفها. لممارسة هذا الحق، راسلنا على ${COMPANY.email}.`,
          ],
        },
      ],
    },
  },
};

export default dict;

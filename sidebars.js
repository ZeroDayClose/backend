/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'README',
      label: 'Home',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'overview/README',
        'overview/solution-pillars',
        'overview/core-principles',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/README',
        'architecture/system-layers',
        'architecture/sidecar-pattern',
        'architecture/shadow-ledger',
      ],
    },
    {
      type: 'category',
      label: 'Modules',
      items: [
        'modules/README',
        'modules/revenue-automation',
        'modules/cash-automation',
        'modules/automated-close',
        'modules/reporting',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/README',
        'features/audit-ready-workflow',
        'features/data-ingestion',
        'features/semantic-search',
        'features/cash-application',
        'features/exception-workflow',
        'features/dashboards',
        'features/alerts-notifications',
        'features/continuous-learning',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/README',
        'integrations/supported-systems',
        'integrations/erp-connectivity',
      ],
    },
    {
      type: 'category',
      label: 'User Interface',
      items: [
        'ui/README',
        'ui/interface-design',
        'ui/guided-workflows',
        'ui/search-interface',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin/README',
        'admin/user-management',
        'admin/configuration',
        'admin/integrations-management',
        'admin/apis-webhooks',
      ],
    },
    {
      type: 'category',
      label: 'Technical Reference',
      items: [
        'technical/README',
        'technical/backend-stack',
        'technical/frontend-stack',
        'technical/data-storage',
        'technical/ai-analysis',
      ],
    },
    {
      type: 'category',
      label: 'Compliance',
      items: [
        'compliance/security-compliance',
      ],
    },
  ],
};

module.exports = sidebars;

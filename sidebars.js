module.exports = {
  someSidebar: [
    {
      type: 'doc',
      id: 'getting_started',
    },
    {
      type: 'doc',
      id: 'integrations/cicd',
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/cli_commands',
        'features/usage_based_resources',
        'features/config_file',
        'features/terraform_modules',
        'features/terragrunt',
        'features/share_links',
        'features/cost_policies',
        'features/environment_variables',
      ],
    },
    {
      type: 'category',
      label: 'Infracost Cloud',
      collapsed: false,
      items: [
        'infracost_cloud/get_started',
        'infracost_cloud/authentication',
        'infracost_cloud/key_concepts',
        'infracost_cloud/guardrails',
        'infracost_cloud/cost_policies',
        'infracost_cloud/reports',
        'infracost_cloud/custom_price_books',
        'infracost_cloud/actual_costs',
        'infracost_cloud/readme_badge',
        {
          type: 'category',
          label: 'SSO integrations',
          collapsed: true,
          items: [
            'infracost_cloud/sso/azure_active_directory',
            'infracost_cloud/sso/okta',
            'infracost_cloud/sso/google_workspace',
            'infracost_cloud/sso/other_saml',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations/jira',
        'integrations/github_app',
        'integrations/github_actions',
        'integrations/gitlab_ci',
        'integrations/atlantis',
        'integrations/azure_pipelines',
        'integrations/terraform_cloud_enterprise',
        'integrations/slack',
        'integrations/vscode',
        'integrations/infracost_api',
        'integrations/third_party_integrations',
      ],
    },
    {
      type: 'category',
      label: 'Supported clouds',
      collapsed: true,
      items: [
        `supported_resources/overview`,
        'supported_resources/aws',
        'supported_resources/azure',
        'supported_resources/google',
      ],
    },
    {
      type: 'category',
      label: 'Cloud Pricing API',
      collapsed: true,
      items: [
        'cloud_pricing_api/api_usage',
        'cloud_pricing_api/self_hosted',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'guides/v0.10_migration',
        'guides/v0.9_migration',
        'guides/v0.8_migration',
        'guides/actions_migration',
        'guides/gitlab_ci_migration',
        'guides/atlantis_migration',
        'guides/azure_devops_migration',
        'guides/uninstall',
      ],
    },
    {
      type: 'doc',
      id: 'faq',
    },
    {
      type: 'doc',
      id: 'troubleshooting',
    },
  ]
};

---
slug: azure
title: Azure
---

Please note:

1. Microsoft Azure GovCloud regions are also supported.
2. Free trials and free tiers, which are usually **not** a significant part of cloud costs, are ignored. This because
   Infracost can only see the Terraform projects it is run against but free tiers are account-wide and there are often
   multiple Terraform projects in an account.
3. On-demand prices are used by default.

Please create a GitHub issue if the resource you
want [isn't supported](/docs/supported_resources/overview#the-resource-i-want-isnt-supported) or your cost
estimate [looks wrong](/docs/supported_resources/overview#my-cost-estimate-looks-wrong).

## Paid resources

There are Terraform resources that Infracost supports, and Azure charges for.

| Service name                     | Terraform resources                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Notes                                                                                                                   |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Attestation | `azurerm_attestation_provider`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                         |
| Active Directory Domain Services | `azurerm_active_directory_domain_service`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                         |
| API Management                   | `azurerm_api_management`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                         |
| App Service                      | `azurerm_app_service_certificate_binding`, `azurerm_app_service_certificate_order`, `azurerm_app_service_custom_hostname_binding`, `azurerm_app_service_environment`, `azurerm_app_service_plan`                                                                                                                                                                                                                                                                                                                                      |                                                                                                                         |
| Application Gateway              | `azurerm_application_gateway`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                         |
| Automation                       | `azurerm_automation_account`, `azurerm_automation_dsc_configuration`, `azurerm_automation_dsc_nodeconfiguration`, `azurerm_automation_job_schedule`                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                         |
| Bastion                          | `azurerm_bastion_host`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                         |
| Cache for Redis                  | `azurerm_redis_cache`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                         |
| Cognitive Search                 | `azurerm_search_service`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                         |
| Container Registry               | `azurerm_container_registry`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                         |
| Content Delivery Network (CDN)   | `azurerm_cdn_endpoint`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                         |
| Cosmos DB                        | `azurerm_cosmosdb_cassandra_keyspace`, `azurerm_cosmosdb_cassandra_table`, `azurerm_cosmosdb_gremlin_database`, `azurerm_cosmosdb_gremlin_graph`, `azurerm_cosmosdb_mongo_collection`, `azurerm_cosmosdb_mongo_database`, `azurerm_cosmosdb_sql_container`, `azurerm_cosmosdb_sql_database`, `azurerm_cosmosdb_table`                                                                                                                                                                                                                 |                                                                                                                         |
| Data Factory                     | `azurerm_data_factory`, `azurerm_data_factory_integration_runtime_azure`, `azurerm_data_factory_integration_runtime_azure_ssis`, `azurerm_data_factory_integration_runtime_managed`, `azurerm_data_factory_integration_runtime_self_hosted`                                                                                                                                                                                                                                                                                           |                                                                                                                         |
| Database                         | `azurerm_mariadb_server`, `azurerm_mssql_database`, `azurerm_mysql_flexible_server`, `azurerm_mysql_server`, `azurerm_postgresql_flexible_server`, `azurerm_postgresql_server`, `azurerm_sql_database`, `azurerm_sql_managed_instance`                                                                                                                                                                                                                                                                                                |                                                                                                                         |
| Databricks workspace             | `azurerm_databricks_workspace`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                         |
| DNS                              | `azurerm_dns_zone`, `azurerm_private_dns_zone`, `azurerm_dns_a_record`, `azurerm_dns_aaaa_record`, `azurerm_dns_caa_record`, `azurerm_dns_cname_record`, `azurerm_dns_mx_record`, `azurerm_dns_ns_record`, `azurerm_dns_ptr_record`, `azurerm_dns_srv_record`, `azurerm_dns_txt_record`, `azurerm_private_dns_a_record`, `azurerm_private_dns_aaaa_record`, `azurerm_private_dns_cname_record`, `azurerm_private_dns_mx_record`, `azurerm_private_dns_ptr_record`, `azurerm_private_dns_srv_record`, `azurerm_private_dns_txt_record` |                                                                                                                         |
| Event Hubs                       | `azurerm_eventhub_namespace`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Premium namespaces are not supported by Terraform.                                                                      |
| Firewall                         | `azurerm_firewall`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                         |
| Front Door                       | `azurerm_frontdoor`, `azurerm_frontdoor_firewall_policy`                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                         |
| Functions                        | `azurerm_function_app`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                         |
| HDInsight                        | `azurerm_hdinsight_hadoop_cluster`, `azurerm_hdinsight_hbase_cluster`, `azurerm_hdinsight_interactive_query_cluster`, `azurerm_hdinsight_kafka_cluster`, `azurerm_hdinsight_spark_cluster`                                                                                                                                                                                                                                                                                                                                            |                                                                                                                         |
| IoT Hub                          | `azurerm_iothub`, `azurerm_iothub_dps`                                                                                                                                                                                                                                                                                                                                            |                                                                                                                         |
| Key Vault                        | `azurerm_key_vault_certificate`, `azurerm_key_vault_key`, `azurerm_key_vault_managed_hardware_security_module`                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                         |
| Load Balancer                    | `azurerm_lb`, `azurerm_lb_rule`, `azurerm_lb_outbound_rule`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                         |
| Logic Apps                       | `azurerm_integration_service_environment`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                         |
| Kubernetes Service (AKS)         | `azurerm_kubernetes_cluster`, `azurerm_kubernetes_cluster_node_pool`                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                         |
| Monitor                          | `azurerm_application_insights`, `azurerm_application_insights_web_test`, `azurerm_log_analytics_workspace`                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                         |
| Notification Hubs                | `azurerm_notification_hub_namespace`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                         |
| Storage Account                  | `azurerm_storage_account`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Only StorageV2, BlockBlobStorage and FileStorage accounts are currently supported.                                      |
| Synapse Analytics                | `azurerm_synapse_spark_pool`, `azurerm_synapse_sql_pool`, `azurerm_synapse_workspace`                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The total costs consist of several resources that should be viewed as a whole.                                          |
| Virtual Machines                 | `azurerm_linux_virtual_machine`, `azurerm_managed_disk`, `azurerm_virtual_machine`, `azurerm_windows_virtual_machine`                                                                                                                                                                                                                                                                                                                                                                                                                 | Non-standard images such as RHEL are not supported. Low priority, Spot and Reserved instances are not supported.        |
| Virtual Machine Scale Sets       | `azurerm_linux_virtual_machine_scale_set`, `azurerm_virtual_machine_scale_set`, `azurerm_windows_virtual_machine_scale_set`                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                         |
| Virtual Network / PrivateLink    | `azurerm_private_endpoint`, `azurerm_public_ip`, `azurerm_public_ip_prefix`, `azurerm_nat_gateway`, `azurerm_virtual_network_peering`                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                         |
| VPN Gateway                      | `azurerm_virtual_network_gateway`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                         |
| Virtual WAN                      | `azurerm_virtual_hub`, `azurerm_vpn_gateway`, `azurerm_point_to_site_vpn_gateway`, `azurerm_express_route_gateway`, `azurerm_vpn_gateway_connection`, `azurerm_express_route_connection`                                                                                                                                                                                                                                                                                                                                              | NVA Infrastructure Unit, Routing Infrastructure Unit and Secured Virtual WAN with Firewall are currently not supported. |

## Free resources

There are Terraform resources that Infracost supports, and we classify as free.

| Terraform resources |
| ---                 |
| `azurerm_api_management_api_diagnostic` |
| `azurerm_api_management_api_operation_policy` |
| `azurerm_api_management_api_operation` |
| `azurerm_api_management_api_policy` |
| `azurerm_api_management_api_schema` |
| `azurerm_api_management_api_version_set` |
| `azurerm_api_management_api` |
| `azurerm_api_management_authorization_server` |
| `azurerm_api_management_backend` |
| `azurerm_api_management_certificate` |
| `azurerm_api_management_custom_domain` |
| `azurerm_api_management_diagnostic` |
| `azurerm_api_management_email_template` |
| `azurerm_api_management_group_user` |
| `azurerm_api_management_group` |
| `azurerm_api_management_identity_provider_aad` |
| `azurerm_api_management_identity_provider_aadb2c` |
| `azurerm_api_management_identity_provider_facebook` |
| `azurerm_api_management_identity_provider_google` |
| `azurerm_api_management_identity_provider_microsoft` |
| `azurerm_api_management_identity_provider_twitter` |
| `azurerm_api_management_logger` |
| `azurerm_api_management_named_value` |
| `azurerm_api_management_openid_connect_provider` |
| `azurerm_api_management_policy` |
| `azurerm_api_management_product_api` |
| `azurerm_api_management_product_group` |
| `azurerm_api_management_product_policy` |
| `azurerm_api_management_product` |
| `azurerm_api_management_property` |
| `azurerm_api_management_subscription` |
| `azurerm_api_management_user` |
| `azurerm_app_service_active_slot` |
| `azurerm_app_service_certificate` |
| `azurerm_app_service_managed_certificate` |
| `azurerm_app_service_slot_virtual_network_swift_connection` |
| `azurerm_app_service_slot` |
| `azurerm_app_service_source_control_token` |
| `azurerm_app_service_virtual_network_swift_connection` |
| `azurerm_application_security_group` |
| `azurerm_automation_certificate` |
| `azurerm_automation_connection_certificate` |
| `azurerm_automation_connection_classic_certificate` |
| `azurerm_automation_connection_service_principal` |
| `azurerm_automation_connection` |
| `azurerm_automation_credential` |
| `azurerm_automation_module` |
| `azurerm_automation_runbook` |
| `azurerm_automation_schedule` |
| `azurerm_automation_variable_bool` |
| `azurerm_automation_variable_datetime` |
| `azurerm_automation_variable_int` |
| `azurerm_automation_variable_string` |
| `azurerm_availability_set` |
| `azurerm_backup_policy_file_share` |
| `azurerm_backup_policy_vm` |
| `azurerm_blueprint_assignment` |
| `azurerm_cdn_profile` |
| `azurerm_container_registry_scope_map` |
| `azurerm_container_registry_token` |
| `azurerm_container_registry_webhook` |
| `azurerm_cosmosdb_account` |
| `azurerm_cosmosdb_notebook_workspace` |
| `azurerm_cosmosdb_sql_stored_procedure` |
| `azurerm_cosmosdb_sql_trigger` |
| `azurerm_cosmosdb_sql_user_defined_function` |
| `azurerm_dashboard` |
| `azurerm_data_factory_custom_dataset` |
| `azurerm_data_factory_data_flow` |
| `azurerm_data_factory_dataset_azure_blob` |
| `azurerm_data_factory_dataset_binary` |
| `azurerm_data_factory_dataset_cosmosdb_sqlapi` |
| `azurerm_data_factory_dataset_delimited_text` |
| `azurerm_data_factory_dataset_http` |
| `azurerm_data_factory_dataset_json` |
| `azurerm_data_factory_dataset_mysql` |
| `azurerm_data_factory_dataset_parquet` |
| `azurerm_data_factory_dataset_postgresql` |
| `azurerm_data_factory_dataset_snowflake` |
| `azurerm_data_factory_dataset_sql_server_table` |
| `azurerm_data_factory_linked_custom_service` |
| `azurerm_data_factory_linked_service_azure_blob_storage` |
| `azurerm_data_factory_linked_service_azure_databricks` |
| `azurerm_data_factory_linked_service_azure_file_storage` |
| `azurerm_data_factory_linked_service_azure_function` |
| `azurerm_data_factory_linked_service_azure_search` |
| `azurerm_data_factory_linked_service_azure_sql_database` |
| `azurerm_data_factory_linked_service_azure_table_storage` |
| `azurerm_data_factory_linked_service_cosmosdb` |
| `azurerm_data_factory_linked_service_cosmosdb_mongoapi` |
| `azurerm_data_factory_linked_service_data_lake_storage_gen2` |
| `azurerm_data_factory_linked_service_key_vault` |
| `azurerm_data_factory_linked_service_kusto` |
| `azurerm_data_factory_linked_service_mysql` |
| `azurerm_data_factory_linked_service_odata` |
| `azurerm_data_factory_linked_service_odbc` |
| `azurerm_data_factory_linked_service_postgresql` |
| `azurerm_data_factory_linked_service_sftp` |
| `azurerm_data_factory_linked_service_snowflake` |
| `azurerm_data_factory_linked_service_sql_server` |
| `azurerm_data_factory_linked_service_synapse` |
| `azurerm_data_factory_linked_service_web` |
| `azurerm_data_factory_managed_private_endpoint` |
| `azurerm_data_factory_pipeline` |
| `azurerm_data_factory_trigger_blob_event` |
| `azurerm_data_factory_trigger_custom_event` |
| `azurerm_data_factory_trigger_schedule` |
| `azurerm_data_factory_tumbling_window` |
| `azurerm_eventhub_authorization_rule` |
| `azurerm_eventhub_cluster` |
| `azurerm_eventhub_consumer_group` |
| `azurerm_eventhub_namespace_authorization_rule` |
| `azurerm_eventhub_namespace_customer_managed_key` |
| `azurerm_eventhub_namespace_disaster_recovery_config` |
| `azurerm_eventhub` |
| `azurerm_firewall_application_rule_collection` |
| `azurerm_firewall_nat_rule_collection` |
| `azurerm_firewall_network_rule_collection` |
| `azurerm_firewall_policy_rule_collection_group` |
| `azurerm_firewall_policy` |
| `azurerm_frontdoor_custom_https_configuration` |
| `azurerm_frontdoor_rules_engine` |
| `azurerm_key_vault_access_policy` |
| `azurerm_key_vault_certificate_data` |
| `azurerm_key_vault_certificate_issuer` |
| `azurerm_key_vault_secret` |
| `azurerm_key_vault` |
| `azurerm_iothub_certificate` |
| `azurerm_iothub_consumer_group` |
| `azurerm_iothub_dps_certificate` |
| `azurerm_iothub_dps_shared_access_policy` |
| `azurerm_iothub_shared_access_policy` |
| `azurerm_lb_backend_address_pool_address` |
| `azurerm_lb_backend_address_pool` |
| `azurerm_lb_nat_pool` |
| `azurerm_lb_nat_rule` |
| `azurerm_lb_probe` |
| `azurerm_lighthouse_assignment` |
| `azurerm_lighthouse_definition` |
| `azurerm_local_network_gateway` |
| `azurerm_log_analytics_cluster_customer_managed_key` |
| `azurerm_log_analytics_data_export_rule` |
| `azurerm_log_analytics_datasource_windows_event` |
| `azurerm_log_analytics_datasource_windows_performance_counter` |
| `azurerm_log_analytics_linked_service` |
| `azurerm_log_analytics_linked_storage_account` |
| `azurerm_log_analytics_saved_search` |
| `azurerm_log_analytics_solution` |
| `azurerm_log_analytics_storage_insights` |
| `azurerm_managed_application_definition` |
| `azurerm_managed_application` |
| `azurerm_management_group_policy_assignment` |
| `azurerm_management_group_subscription_association` |
| `azurerm_management_group` |
| `azurerm_management_lock` |
| `azurerm_mariadb_configuration` |
| `azurerm_mariadb_firewall_rule` |
| `azurerm_mariadb_virtual_network_rule` |
| `azurerm_marketplace_agreement` |
| `azurerm_mssql_firewall_rule` |
| `azurerm_mysql_firewall_rule` |
| `azurerm_mysql_flexible_database` |
| `azurerm_mysql_flexible_server_configuration` |
| `azurerm_mysql_flexible_server_firewall_rule` |
| `azurerm_mysql_virtual_network_rule` |
| `azurerm_nat_gateway_public_ip_association` |
| `azurerm_nat_gateway_public_ip_prefix_association` |
| `azurerm_network_interface_security_group_association` |
| `azurerm_network_interface` |
| `azurerm_network_security_group` |
| `azurerm_network_security_rule` |
| `azurerm_notification_hub` |
| `azurerm_policy_assignment` |
| `azurerm_policy_definition` |
| `azurerm_policy_remediation` |
| `azurerm_policy_set_definition` |
| `azurerm_postgresql_configuration` |
| `azurerm_postgresql_firewall_rule` |
| `azurerm_postgresql_flexible_server_configuration` |
| `azurerm_postgresql_flexible_server_database` |
| `azurerm_postgresql_flexible_server_firewall_rule` |
| `azurerm_postgresql_virtual_network_rule` |
| `azurerm_private_dns_zone_virtual_network_link` |
| `azurerm_private_link_service` |
| `azurerm_proximity_placement_group` |
| `azurerm_redis_firewall_rule` |
| `azurerm_redis_linked_server` |
| `azurerm_resource_group` |
| `azurerm_resource_provider_registration` |
| `azurerm_role_assignment` |
| `azurerm_role_definition` |
| `azurerm_sentinel_alert_rule_fusion` |
| `azurerm_sentinel_alert_rule_machine_learning_behavior_analytics` |
| `azurerm_sentinel_alert_rule_ms_security_incident` |
| `azurerm_sentinel_alert_rule_scheduled` |
| `azurerm_sentinel_data_connector_aws_cloud_trail` |
| `azurerm_sentinel_data_connector_azure_active_directory` |
| `azurerm_sentinel_data_connector_azure_advanced_threat_protection` |
| `azurerm_sentinel_data_connector_azure_security_center` |
| `azurerm_sentinel_data_connector_microsoft_cloud_app_security` |
| `azurerm_sentinel_data_connector_microsoft_defender_advanced_threat_protection` |
| `azurerm_sentinel_data_connector_office_365` |
| `azurerm_sentinel_data_connector_threat_intelligence` |
| `azurerm_site_recovery_network_mapping` |
| `azurerm_site_recovery_replication_policy` |
| `azurerm_sql_firewall_rule` |
| `azurerm_sql_server` |
| `azurerm_sql_virtual_network_rule` |
| `azurerm_ssh_public_key` |
| `azurerm_storage_account_network_rules` |
| `azurerm_storage_blob_inventory_policy` |
| `azurerm_storage_container` |
| `azurerm_storage_data_lake_gen2_filesystem` |
| `azurerm_storage_management_policy` |
| `azurerm_storage_table_entity` |
| `azurerm_subnet_network_security_group_association` |
| `azurerm_subnet` |
| `azurerm_subscription` |
| `azurerm_synapse_firewall_rule` |
| `azurerm_synapse_private_link_hub` |
| `azurerm_user_assigned_identity` |
| `azurerm_virtual_desktop_application_group` |
| `azurerm_virtual_desktop_application` |
| `azurerm_virtual_desktop_host_pool` |
| `azurerm_virtual_desktop_workspace_application_group_association` |
| `azurerm_virtual_desktop_workspace` |
| `azurerm_virtual_machine_data_disk_attachment` |
| `azurerm_virtual_network` |
| `azurerm_virtual_wan` |

import{createConfig as o}from"wagmi";const e=e=>o({ssr:!0,...e,connectors:e.connectors?.filter((o=>"mock"===o.type)),multiInjectedProviderDiscovery:!1});export{e as createConfig};

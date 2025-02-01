/**
 * Creates a Wagmi configuration with SSR support and filtered connectors
 * @param {Object} config - Base configuration object
 * @param {Array} config.connectors - Array of wallet connectors
 * @returns {WagmiConfig} Configured Wagmi instance
 */

import { createConfig as wagmiCreateConfig } from "wagmi";

const createPrivyConfig = config => wagmiCreateConfig({
  ssr: true,
  ...config,
  connectors: config.connectors?.filter(connector => connector.type === "mock"),
  multiInjectedProviderDiscovery: false
});

export { createPrivyConfig as createConfig };

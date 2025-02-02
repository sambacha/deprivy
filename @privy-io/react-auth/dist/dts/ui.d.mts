import * as react_jsx_runtime from 'react/jsx-runtime';
import { R as RuntimeLoginOverridableOptions, C as Chain } from './types-CyPM8Lj_.js';
import { Hex } from 'viem';
import { Cluster } from '@privy-io/js-sdk-core';
import '@solana/wallet-adapter-base';
import 'react';
import '@privy-io/public-api';
import 'eventemitter3';
import '@metamask/eth-sig-util';
import '@solana/web3.js';

type UserPillProps = {
    action?: {
        type: 'login';
        options?: RuntimeLoginOverridableOptions;
    } | {
        type: 'connectWallet';
        options?: {
            suggestedAddress?: string;
        };
    };
    expanded?: boolean;
    label?: React.ReactNode;
    size?: number;
    ui?: {
        minimal?: boolean;
        background?: 'accent' | 'secondary';
    };
};
declare const UserPill: ({ expanded, action, label, size, ui: { minimal, background }, }: UserPillProps) => react_jsx_runtime.JSX.Element;

type EvmAsset = {
    chain: Chain;
    address: Hex;
    ticker: string;
    icon?: string;
};
type SolAsset = {
    cluster: Cluster;
    address: string;
    ticker: string;
    icon?: string;
};

type WalletsDialogProps = {
    networks?: {
        id: number;
    }[];
    assets?: {
        ethereum?: EvmAsset[];
        solana?: SolAsset[];
    };
};
declare const WalletsDialog: ({ networks, assets }: WalletsDialogProps) => react_jsx_runtime.JSX.Element;

export { UserPill, WalletsDialog };

import React, { useEffect, useState } from 'react';
import { createClient } from 'urql';

export default function SubGraphClient() {
    const [token, setToken] = useState(0);
    const queryURL = 'https://gateway-arbitrum.network.thegraph.com/api/028053c734636a2bda0f1e9f46503f9b/subgraphs/id/HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B';
    const _client = createClient({
        url: queryURL,
    });
    const _query = `{
        factories(first: 5) {
          id
          poolCount
          txCount
          totalVolumeUSD
          totalFeesUSD
          totalValueLockedETH
          totalValueLockedETHUntracked
          totalValueLockedUSD
          totalVolumeETH
          totalValueLockedUSDUntracked
          totalFeesETH
        }
        bundles(first: 5) {
          id
          ethPriceUSD
        }
        bundle(id: "") {
          id
        }
        poolHourData(id: "") {
          feeGrowthGlobal0X128
          feeGrowthGlobal1X128
        }
    }`;

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await _client.query(_query).toPromise();
            console.log(data);
            // Update token or perform other actions with the data if needed
        };
        fetchData();
    }, [_client, _query]);

    return (
        <>
            <h3>subGraphClient</h3>
            <div>{token}</div>
        </>
    );
}

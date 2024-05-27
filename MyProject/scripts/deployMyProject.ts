import { toNano } from '@ton/core';
import { MyProject } from '../wrappers/MyProject';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const myProject = provider.open(await MyProject.fromInit(BigInt(Math.floor(Math.random() * 10000))));

    await myProject.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(myProject.address);

    console.log('ID', await myProject.getId());
}

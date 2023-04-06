import ETHLlogo from '../../src/assets/eth-logo-white.png';

function maskHash(hash) {
    return hash.slice(0, 7) + '...' + hash.slice(hash.length - 5, hash.length)
}

export default function DemoCard() {
    const hash = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';
    return (
        <div className="p-3 justify-end item-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white self-center">
            <div className="flex flex-col h-full justify-between">
                <img src={ETHLlogo} alt="ETH-logo" className="max-w-[33px]"/>
                <div>
                    <p className="font-[300] text-sm">{maskHash(hash)}</p>
                    <h2 className="font-[400] text-lg">Ethereum</h2>
                </div>
            </div>
        </div>
    )
}
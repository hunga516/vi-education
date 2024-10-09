const LazySection = () => {

    return (
        <div className="mt-36 flex flex-col items-center gap-2">
            <div className="text-lg font-semibold tracking-wide text-zinc-600">Đối tác của chúng tôi</div>
            <div className="flex flex-row items-center">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a1e7327a9dd0e29516d652c8125c56ecc362a2471c56dd331903a4850be5f1?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead" alt="Decorative element" className="object-contain w-[90%] aspect-[9.71] max-w-[1120px] max-md:mt-10 max-md:max-w-full" />
                <div className="w-24 bg-[#13150f] h-[107px]"></div>
            </div>
        </div>
    )
}

export default LazySection
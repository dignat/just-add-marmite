export default function Skeleton() {
    return (
        <div className="skeleton">
            <div className="s-banner"></div>
            <div className="s-header"></div>
            <div className="s-content"></div>
            <div className="s-content"></div>
            <div className="s-content"></div>

            <style jsx>{`
                .skeleton {
                    max-width: 1200px;
                    margin: 20px auto;
                }
            `}</style>
        </div>
    )
}
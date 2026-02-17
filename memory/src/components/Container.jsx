const Container = ({ valeur, estDevoilee, onCliquer }) => {
    const containerStyle = {
        backgroundImage: estDevoilee ? `url(./images/${valeur}.png)` : `url(./images/cache.png)`,
        transition: "transform 0.6s",
        transform: estDevoilee ? "rotateY(180deg)" : "rotateY(0deg)",
        transformStyle: "preserve-3d",
        scale: estDevoilee ? "-1 1" : "1 1",
    };

    return (
        <div className="card" style={containerStyle}>
            <button onClick={onCliquer} disabled={estDevoilee} hidden={ estDevoilee }>
                { "CLIQUER POUR DEVOILER" }
            </button>
        </div>
    );
}

export default Container;
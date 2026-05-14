import React, { useEffect, useState } from 'react';
import './../styles/ColorRandom.scss';

const RandomColors: React.FC = () => {

    const generateRandomColors = (): string[] => {
        return [
            `hsl(${Math.random() * 360}, 70%, 50%)`,
            `hsl(${Math.random() * 360}, 70%, 50%)`,
            `hsl(${Math.random() * 360}, 70%, 50%)`,
            `hsl(${Math.random() * 360}, 70%, 50%)`,
        ];
    };

    const [colors, setColors] = useState<string[]>(() =>
        generateRandomColors()
    );

    useEffect(() => {

        const interval = setInterval(() => {
            setColors(generateRandomColors());
        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section className="random-section">

            <h2>Colores Aleatorios</h2>

            <div className="grid">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="card"
                        style={{ backgroundColor: color }}
                    >
                        <p>{color}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default RandomColors;
import React, { useState } from 'react';
import './../styles/ColorHarmonizer.scss';

interface HarmonyColor {
    type: string;
    val: string;
}

const ColorHarmonizer: React.FC = () => {
    const [hue, setHue] = useState<number>(180);
    const harmonies: HarmonyColor[] = [
        {type: 'Base', val: `hsl(${hue}, 70%, 50%)`},
        {type: 'Complementary', val: `hsl(${(hue + 180) % 360}, 70%, 50%)`},
        {type: 'Triada A', val: `hsl(${(hue + 120) % 360}, 70%, 50%)`},
        {type: 'Triada B', val: `hsl(${(hue + 240) % 360}, 70%, 50%)`},
    ];

    const dynamicBox = {
        backgroundColor: `hsl(${hue}, 80%, 40%)`,
        border: `5px solid hsl(${(hue + 90) % 360}, 80%, 50%)`
    };
    return (
        <section className="harmonies">
            <h2>Armonía de Colores</h2>
            <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => setHue(Number(e.target.value))}
            />
            <div className="grid">
                {harmonies.map((c) => (
                    <div 
                        key={c.type} 
                        className="card" 
                        style = {{backgroundColor: c.val}}
                    >
                        <span>{c.type}</span>
                    </div>
                ))}
            <div
                className="dynamic-box"
                style={dynamicBox}
            >
                <h3>Objeto</h3>
            </div>
            </div>
        </section>
    )
}

export default ColorHarmonizer;
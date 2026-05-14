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
    background: `
        linear-gradient(
            90deg,
            ${harmonies[0].val} 0%,
            ${harmonies[0].val} 25%,
            ${harmonies[1].val} 25%,
            ${harmonies[1].val} 50%,
            ${harmonies[2].val} 50%,
            ${harmonies[2].val} 75%,
            ${harmonies[3].val} 75%,
            ${harmonies[3].val} 100%)`
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
            </div>
            </div>
        </section>
    )
}

export default ColorHarmonizer;
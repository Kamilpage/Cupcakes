// Carousel.tsx
import {useEffect, useRef, useState} from "react";
import './Carousel.css'

export default function Carousel({ images, autoMs }) {
    const [i, setI] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    const len = images.length;
    const next = () => setI((v) => (v + 1) % len);
    const prev = () => setI((v) => (v - 1 + len) % len);
    const goTo = (idx) => setI(idx);

    // Стрелки на клавиатуре
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Автоплей опционально
    useEffect(() => {
        if (!autoMs) return;
        const id = setInterval(next, autoMs);
        return () => clearInterval(id);
    }, [autoMs]);

    // Простой свайп
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        let startX = 0, dx = 0, touching = false;

        const onDown = (e) => { touching = true; startX = e.clientX; el.setPointerCapture(e.pointerId); };
        const onMove = (e) => { if (touching) dx = e.clientX - startX; };
        const onUp = (e) => {
            touching = false;
            if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
            dx = 0;
            try { el.releasePointerCapture(e.pointerId); } catch {}
        };

        el.addEventListener("pointerdown", onDown);
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerup", onUp);
        el.addEventListener("pointercancel", onUp);
        return () => {
            el.removeEventListener("pointerdown", onDown);
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerup", onUp);
            el.removeEventListener("pointercancel", onUp);
        };
    }, []);

    return (
        <div className="carousel">
            <div
                ref={trackRef}
                className="carousel__track"
                style={{ transform: `translateX(-${i * 100}%)` }}
            >
                {images.map((src, idx) => (
                    <div className="carousel__slide" key={idx}>
                        <img src={src} alt={`slide ${idx + 1}`} />
                    </div>
                ))}
            </div>

            <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Предыдущий">‹</button>
            <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Следующий">›</button>

            <div className="carousel__dots">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`carousel__dot ${idx === i ? "is-active" : ""}`}
                        onClick={() => goTo(idx)}
                        aria-label={`К слайду ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { 
  Anchor, 
  Navigation, 
  Clock, 
  Ship
} from 'lucide-react';
import { 
  WORLD_LANDMASS, 
  TARGET_COUNTRY_PATHS, 
  TARGET_DESTINATIONS, 
  SOURCING_ORIGIN, 
  type TradeDestination
} from '../../data/worldMapData';

export default function TradeCorridorsMap() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-cycle through target trade corridors every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TARGET_DESTINATIONS.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeDest: TradeDestination = TARGET_DESTINATIONS[activeIndex];
  
  // Permanent Gulf Focus geometry and scale factor
  const sf = 0.28;
  const currentViewBox = "548 150 188 116";

  return (
    <div 
      className="w-full flex flex-col gap-3.5 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Top Header Status (Light Theme) */}
      <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-slate-200">
        
        {/* Origin Live Indicator */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping absolute opacity-75"></span>
            <span className="w-2 h-2 rounded-full bg-gold relative"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-900 font-heading">
              Gujarat Gateway
            </span>
            <span className="text-[10px] font-mono text-gold-dark bg-gold/15 px-1.5 py-0.5 rounded border border-gold/40 font-semibold">
              Mundra &amp; Kandla
            </span>
          </div>
        </div>

        {/* Corridor Focus Badge */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-teal bg-teal/10 px-2 py-0.5 rounded-md border border-teal/20 font-semibold">
          <Navigation className="w-3 h-3 text-teal" />
          <span>TRADE CORRIDORS ({activeIndex + 1}/{TARGET_DESTINATIONS.length})</span>
        </div>

      </div>

      {/* Main Map Visual Canvas (Light Maritime Chart Theme) */}
      <div className="relative w-full aspect-[16/10.5] sm:aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
        
        {/* Maritime Ocean Radial Chart Color */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,#EDF4F9_0%,#E4EEF5_60%,#D9E6F0_100%)]"></div>

        {/* Subtle Lat/Long Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#CBD5E130_1px,transparent_1px),linear-gradient(to_bottom,#CBD5E130_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

        {/* SVG Gulf Focus Maritime Corridor Map */}
        <svg
          viewBox={currentViewBox}
          className="w-full h-full relative z-0"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="routeBloomLight" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Subtle Graticule Reference Lines */}
          <g opacity="0.4" stroke="#94A3B8" strokeWidth={0.5 * sf} strokeDasharray={`${3 * sf} ${6 * sf}`}>
            <line x1="0" y1="201.7" x2="960" y2="201.7" />
            <line x1="640" y1="0" x2="640" y2="480" stroke="#C8A45D" strokeWidth={0.8 * sf} opacity="0.6" />
          </g>

          {/* 2. Authentic Landmass Continents (Light Crisp Theme) */}
          <path
            d={WORLD_LANDMASS}
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth={0.6 * sf}
          />

          {/* 3. India Origin Base (Teal-tinted light wash) */}
          {TARGET_COUNTRY_PATHS['IN'] && (
            <path
              d={TARGET_COUNTRY_PATHS['IN']}
              fill="#E6F2F0"
              stroke="#398D89"
              strokeWidth={1.2 * sf}
            />
          )}

          {/* 4. Target GCC Countries (Active Auto-Highlighted) */}
          {TARGET_DESTINATIONS.map((dest, idx) => {
            const p = TARGET_COUNTRY_PATHS[dest.code];
            if (!p) return null;
            const isSelected = idx === activeIndex;
            return (
              <path
                key={`country-${dest.id}`}
                d={p}
                fill={isSelected ? '#C8A45D' : '#F1F5F9'}
                fillOpacity={isSelected ? 0.95 : 0.8}
                stroke={isSelected ? '#967735' : '#94A3B8'}
                strokeWidth={(isSelected ? 1.4 : 0.8) * sf}
                className="transition-all duration-500 cursor-pointer"
                onClick={() => setActiveIndex(idx)}
              >
                <title>{dest.country}</title>
              </path>
            );
          })}

          {/* 5. Primary Commercial Trade Routes to GCC Destinations */}
          {TARGET_DESTINATIONS.map((dest, idx) => {
            const isSelected = idx === activeIndex;
            const routeStrokeColor = isSelected ? '#102B46' : '#64748B';
            const baseOpacity = isSelected ? 1 : 0.4;
            const strokeW = (isSelected ? 2.2 : 1.2) * sf;

            return (
              <g key={`route-${dest.id}`} className="transition-all duration-500">
                {/* Route Glow Underlay */}
                <path
                  d={dest.routePath}
                  stroke={dest.color}
                  strokeWidth={(isSelected ? 4 : 1.8) * sf}
                  strokeOpacity={isSelected ? 0.45 : 0.12}
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Animated Dashed Flowing Line */}
                <path
                  d={dest.routePath}
                  stroke={routeStrokeColor}
                  strokeWidth={strokeW}
                  strokeDasharray={`${4 * sf} ${4 * sf}`}
                  strokeOpacity={baseOpacity}
                  fill="none"
                  className={isSelected ? "animate-route-flow-fast" : "animate-route-flow"}
                  strokeLinecap="round"
                />

                {/* Traveling Photon Beacon */}
                <circle
                  r={(isSelected ? 3.2 : 2.0) * sf}
                  fill={isSelected ? "#C8A45D" : "#102B46"}
                  stroke="#FFFFFF"
                  strokeWidth={0.8 * sf}
                  filter="url(#routeBloomLight)"
                >
                  <animateMotion
                    dur={isSelected ? "2.6s" : "4.5s"}
                    repeatCount="indefinite"
                    path={dest.routePath}
                  />
                </circle>

                {/* Alternate Route (Red Sea to Jeddah for Saudi) */}
                {dest.altRoutePath && (
                  <>
                    <path
                      d={dest.altRoutePath}
                      stroke={routeStrokeColor}
                      strokeWidth={strokeW * 0.9}
                      strokeDasharray={`${4 * sf} ${4 * sf}`}
                      strokeOpacity={baseOpacity * 0.85}
                      fill="none"
                      className="animate-route-flow"
                      strokeLinecap="round"
                    />
                    <circle
                      r={2.0 * sf}
                      fill={dest.color}
                      stroke="#FFFFFF"
                      strokeWidth={0.6 * sf}
                      filter="url(#routeBloomLight)"
                    >
                      <animateMotion
                        dur="4.8s"
                        repeatCount="indefinite"
                        path={dest.altRoutePath}
                      />
                    </circle>
                  </>
                )}
              </g>
            );
          })}

          {/* 6. Destination Port Markers & Badges */}
          {TARGET_DESTINATIONS.map((dest, idx) => {
            const isSelected = idx === activeIndex;
            const { x, y } = dest.portCoords;
            const r = (isSelected ? 4 : 2.4) * sf;

            return (
              <g
                key={`port-${dest.id}`}
                className="cursor-pointer"
                onClick={() => setActiveIndex(idx)}
              >
                {/* Pulsing Radar Ring on active port */}
                {isSelected && (
                  <circle
                    cx={x}
                    cy={y}
                    r={r * 3.5}
                    stroke={dest.color}
                    fill="none"
                    className="animate-radar-wave"
                  />
                )}

                <circle
                  cx={x}
                  cy={y}
                  r={r}
                  fill={isSelected ? dest.color : '#398D89'}
                  stroke="#FFFFFF"
                  strokeWidth={0.8 * sf}
                />

                {/* Port Country Label */}
                <g>
                  <rect
                    x={x + 3 * sf}
                    y={y - 5.5 * sf}
                    width={(dest.country.length * 2.8 + 8) * sf}
                    height={7.5 * sf}
                    rx={1.5 * sf}
                    fill="#FFFFFF"
                    fillOpacity="0.95"
                    stroke={isSelected ? dest.color : '#CBD5E1'}
                    strokeWidth={0.6 * sf}
                  />
                  <text
                    x={x + 5 * sf}
                    y={y - 0.5 * sf}
                    fill={isSelected ? '#102B46' : '#475569'}
                    fontSize={3.6 * sf}
                    fontWeight={isSelected ? 'bold' : '600'}
                    fontFamily="sans-serif"
                  >
                    {dest.country}
                  </text>
                </g>

                {dest.altPortCoords && (
                  <g>
                    <circle
                      cx={dest.altPortCoords.x}
                      cy={dest.altPortCoords.y}
                      r={(isSelected ? 3.5 : 2.0) * sf}
                      fill={dest.color}
                      stroke="#FFFFFF"
                      strokeWidth={0.7 * sf}
                    />
                    <text
                      x={dest.altPortCoords.x - 20 * sf}
                      y={dest.altPortCoords.y + 1 * sf}
                      fill="#64748B"
                      fontSize={3.2 * sf}
                      fontWeight="600"
                      fontFamily="sans-serif"
                    >
                      Jeddah
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* 7. Sourcing Origin: Gujarat Hub */}
          <g>
            <circle
              cx={SOURCING_ORIGIN.coords.x}
              cy={SOURCING_ORIGIN.coords.y}
              r={12 * sf}
              stroke="#C8A45D"
              fill="none"
              className="animate-radar-wave"
            />
            <circle
              cx={SOURCING_ORIGIN.coords.x}
              cy={SOURCING_ORIGIN.coords.y}
              r={6 * sf}
              fill="#C8A45D"
              fillOpacity="0.25"
            />
            <circle
              cx={SOURCING_ORIGIN.coords.x}
              cy={SOURCING_ORIGIN.coords.y}
              r={3.8 * sf}
              fill="#C8A45D"
              stroke="#FFFFFF"
              strokeWidth={1.0 * sf}
              filter="url(#routeBloomLight)"
            />

            <g>
              <rect
                x={SOURCING_ORIGIN.coords.x + 5 * sf}
                y={SOURCING_ORIGIN.coords.y - 7 * sf}
                width={50 * sf}
                height={12 * sf}
                rx={2 * sf}
                fill="#FFFFFF"
                fillOpacity="0.95"
                stroke="#C8A45D"
                strokeWidth={0.8 * sf}
              />
              <text
                x={SOURCING_ORIGIN.coords.x + 8 * sf}
                y={SOURCING_ORIGIN.coords.y - 2.5 * sf}
                fill="#102B46"
                fontSize={4.2 * sf}
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                Gujarat, India
              </text>
              <text
                x={SOURCING_ORIGIN.coords.x + 8 * sf}
                y={SOURCING_ORIGIN.coords.y + 2.5 * sf}
                fill="#B8860B"
                fontSize={3.2 * sf}
                fontWeight="600"
                fontFamily="sans-serif"
              >
                Mundra &amp; Kandla
              </text>
            </g>
          </g>

        </svg>

        {/* Mini Corridor Cycle Indicator Dots at Bottom-Right of map */}
        <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md border border-slate-200 shadow-sm">
          {TARGET_DESTINATIONS.map((d, idx) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex 
                  ? 'w-4 h-1.5 bg-gold' 
                  : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
              title={`Switch to ${d.country}`}
              aria-label={`Switch to ${d.country}`}
            />
          ))}
        </div>

      </div>

      {/* Responsive Active Corridor Details Card (Docked cleanly below map so it never hides routes) */}
      <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/90 shadow-sm text-slate-800 transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: activeDest.color }}
            ></span>
            <span className="text-xs font-bold text-navy-900 uppercase tracking-wider font-heading">
              {activeDest.country}
            </span>
            <span className="text-[9px] font-mono text-teal bg-teal/10 px-1.5 py-0.5 rounded border border-teal/20 font-semibold">
              Active Lane
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-600">
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-teal shrink-0" />
              <span>{activeDest.transitDays}</span>
            </span>
            <span className="flex items-center gap-1 font-mono text-slate-500">
              <Ship className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>{activeDest.nauticalMiles}</span>
            </span>
          </div>
        </div>

        <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="flex items-start gap-1.5 text-slate-700">
            <Anchor className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
            <span className="leading-snug text-[11px]">
              <strong className="text-navy-900">Ports:</strong> {activeDest.portName}
            </span>
          </div>

          <div className="text-[11px] text-slate-600 leading-snug">
            <strong className="text-navy-900">Cargo:</strong> {activeDest.commodities}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gold"></span>
          Direct Sourcing: Gujarat (Mundra &amp; Kandla)
        </span>
        <span className="italic text-[10px]">
          Auto-cycling through active global trade corridors
        </span>
      </div>

    </div>
  );
}

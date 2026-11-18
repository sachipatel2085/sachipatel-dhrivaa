import React, { useState, useEffect } from 'react';
import { 
  Anchor, 
  Globe2, 
  Navigation, 
  Clock, 
  Ship
} from 'lucide-react';
import { 
  WORLD_LANDMASS, 
  TARGET_COUNTRY_PATHS, 
  TARGET_DESTINATIONS, 
  SOURCING_ORIGIN, 
  GLOBAL_SHIPPING_LANES,
  type TradeDestination
} from '../../data/worldMapData';

export default function TradeCorridorsMap() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'world' | 'gulf'>('world');
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
  const isZoomed = viewMode === 'gulf';
  const sf = isZoomed ? 0.28 : 1.0;

  const currentViewBox = isZoomed 
    ? "535 145 220 120" 
    : "0 0 960 480";

  return (
    <div 
      className="w-full flex flex-col gap-4 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Top Header / View Controller */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        
        {/* Origin Live Indicator */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping absolute opacity-75"></span>
            <span className="w-2 h-2 rounded-full bg-gold relative"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white font-heading">
                Gujarat Gateway
              </span>
              <span className="text-[10px] font-mono text-gold bg-gold/10 px-1.5 py-0.5 rounded border border-gold/30">
                Mundra &amp; Kandla
              </span>
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-navy-900/90 p-0.5 rounded-lg border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setViewMode('world')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-200 ${
              viewMode === 'world'
                ? 'bg-gold text-navy-950 font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
            title="World map view"
          >
            <Globe2 className="w-3 h-3" />
            <span>World</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('gulf')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-200 ${
              viewMode === 'gulf'
                ? 'bg-teal text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
            title="Gulf corridor zoom"
          >
            <Navigation className="w-3 h-3" />
            <span>Gulf Focus</span>
          </button>
        </div>

      </div>

      {/* Main Map Visual Canvas */}
      <div className="relative w-full aspect-[16/10.5] sm:aspect-[16/10] bg-navy-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
        
        {/* Ocean Radial Bathymetric Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,#0f2844_0%,#081726_70%,#050e18_100%)]"></div>

        {/* Subtle Lat/Long Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#16304d15_1px,transparent_1px),linear-gradient(to_bottom,#16304d15_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none"></div>

        {/* Top-Right Ambient Status */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none flex items-center gap-1.5 text-[10px] text-slate-400 font-mono bg-navy-900/80 px-2 py-0.5 rounded-md border border-slate-800/80 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"></span>
          <span>AUTO-CORRIDOR {activeIndex + 1}/{TARGET_DESTINATIONS.length}</span>
        </div>

        {/* SVG World Map */}
        <svg
          viewBox={currentViewBox}
          className="w-full h-full relative z-0 transition-all duration-700 ease-in-out"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="globalLaneGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8A45D" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#398D89" stopOpacity="0.2" />
            </linearGradient>

            <filter id="routeBloom" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation={isZoomed ? "0.8" : "2"} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Global Graticule Reference Lines */}
          <g opacity="0.18" stroke="#398D89" strokeWidth={0.5 * sf} strokeDasharray={`${3 * sf} ${6 * sf}`}>
            <line x1="0" y1="201.7" x2="960" y2="201.7" />
            <line x1="0" y1="280.0" x2="960" y2="280.0" />
            <line x1="480" y1="0" x2="480" y2="480" />
            <line x1="640" y1="0" x2="640" y2="480" stroke="#C8A45D" strokeWidth={0.8 * sf} opacity="0.4" />
          </g>

          {/* 2. Authentic World Landmass (Continents) */}
          <path
            d={WORLD_LANDMASS}
            fill="#122744"
            stroke="#1b395d"
            strokeWidth={0.6 * sf}
          />

          {/* 3. India Origin Base */}
          {TARGET_COUNTRY_PATHS['IN'] && (
            <path
              d={TARGET_COUNTRY_PATHS['IN']}
              fill="#163c63"
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
                fill={isSelected ? (dest.id === 'uae' ? '#C8A45D' : '#2A7270') : '#183a5c'}
                fillOpacity={isSelected ? 0.9 : 0.55}
                stroke={isSelected ? '#C8A45D' : '#398D89'}
                strokeWidth={(isSelected ? 1.4 : 0.8) * sf}
                className="transition-all duration-500 cursor-pointer"
                onClick={() => setActiveIndex(idx)}
              >
                <title>{dest.country}</title>
              </path>
            );
          })}

          {/* 5. Global Secondary Maritime Shipping Corridors */}
          <g opacity={isZoomed ? "0.2" : "0.6"}>
            {GLOBAL_SHIPPING_LANES.map((lane, idx) => (
              <g key={`global-lane-${idx}`}>
                <path
                  d={lane.path}
                  stroke="url(#globalLaneGlow)"
                  strokeWidth={1.2 * sf}
                  strokeDasharray={`${4 * sf} ${5 * sf}`}
                  className="animate-route-flow"
                  fill="none"
                />
                {!isZoomed && (
                  <circle r={2.2 * sf} fill="#398D89">
                    <animateMotion
                      dur="5s"
                      repeatCount="indefinite"
                      path={lane.path}
                    />
                  </circle>
                )}
              </g>
            ))}
          </g>

          {/* 6. Primary Commercial Trade Routes to GCC Destinations */}
          {TARGET_DESTINATIONS.map((dest, idx) => {
            const isSelected = idx === activeIndex;
            const routeStrokeColor = isSelected ? '#C8A45D' : '#398D89';
            const baseOpacity = isSelected ? 1 : 0.35;
            const strokeW = (isSelected ? 2.2 : 1.2) * sf;

            return (
              <g key={`route-${dest.id}`} className="transition-all duration-500">
                {/* Route Glow Underlay */}
                <path
                  d={dest.routePath}
                  stroke={dest.color}
                  strokeWidth={(isSelected ? 4 : 1.8) * sf}
                  strokeOpacity={isSelected ? 0.4 : 0.08}
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
                  fill={isSelected ? "#FFFFFF" : dest.color}
                  stroke={dest.color}
                  strokeWidth={0.8 * sf}
                  filter="url(#routeBloom)"
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
                      strokeOpacity={baseOpacity * 0.8}
                      fill="none"
                      className="animate-route-flow"
                      strokeLinecap="round"
                    />
                    <circle
                      r={2.0 * sf}
                      fill={dest.color}
                      filter="url(#routeBloom)"
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

          {/* 7. Destination Port Markers */}
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
                {/* Pulsing Radar Ring on the active port */}
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
                  fill={isSelected ? dest.color : '#38BDF8'}
                  stroke="#FFFFFF"
                  strokeWidth={0.7 * sf}
                />

                {/* Port Label in Zoomed Mode */}
                {isZoomed && (
                  <g>
                    <rect
                      x={x + 3 * sf}
                      y={y - 5.5 * sf}
                      width={(dest.country.length * 2.8 + 8) * sf}
                      height={7.5 * sf}
                      rx={1.5 * sf}
                      fill="#091C30"
                      fillOpacity="0.85"
                      stroke={isSelected ? dest.color : '#1F456E'}
                      strokeWidth={0.5 * sf}
                    />
                    <text
                      x={x + 5 * sf}
                      y={y - 0.5 * sf}
                      fill={isSelected ? '#FFFFFF' : '#CBD5E1'}
                      fontSize={3.6 * sf}
                      fontWeight={isSelected ? 'bold' : '600'}
                      fontFamily="sans-serif"
                    >
                      {dest.country}
                    </text>
                  </g>
                )}

                {dest.altPortCoords && (
                  <circle
                    cx={dest.altPortCoords.x}
                    cy={dest.altPortCoords.y}
                    r={(isSelected ? 3.5 : 2.0) * sf}
                    fill={dest.color}
                    stroke="#FFFFFF"
                    strokeWidth={0.6 * sf}
                  />
                )}
              </g>
            );
          })}

          {/* 8. Sourcing Origin: Gujarat Hub */}
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
              fillOpacity="0.3"
            />
            <circle
              cx={SOURCING_ORIGIN.coords.x}
              cy={SOURCING_ORIGIN.coords.y}
              r={3.8 * sf}
              fill="#C8A45D"
              stroke="#FFFFFF"
              strokeWidth={1.0 * sf}
              filter="url(#routeBloom)"
            />

            {isZoomed ? (
              <g>
                <rect
                  x={SOURCING_ORIGIN.coords.x + 5 * sf}
                  y={SOURCING_ORIGIN.coords.y - 7 * sf}
                  width={50 * sf}
                  height={12 * sf}
                  rx={2 * sf}
                  fill="#091C30"
                  fillOpacity="0.92"
                  stroke="#C8A45D"
                  strokeWidth={0.8 * sf}
                />
                <text
                  x={SOURCING_ORIGIN.coords.x + 8 * sf}
                  y={SOURCING_ORIGIN.coords.y - 2.5 * sf}
                  fill="#FFFFFF"
                  fontSize={4.2 * sf}
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  Gujarat, India
                </text>
                <text
                  x={SOURCING_ORIGIN.coords.x + 8 * sf}
                  y={SOURCING_ORIGIN.coords.y + 2.5 * sf}
                  fill="#C8A45D"
                  fontSize={3.2 * sf}
                  fontFamily="sans-serif"
                >
                  Mundra &amp; Kandla
                </text>
              </g>
            ) : (
              <g>
                <text
                  x={SOURCING_ORIGIN.coords.x + 10}
                  y={SOURCING_ORIGIN.coords.y - 2}
                  fill="#FFFFFF"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
                >
                  Gujarat, India
                </text>
                <text
                  x={SOURCING_ORIGIN.coords.x + 10}
                  y={SOURCING_ORIGIN.coords.y + 11}
                  fill="#C8A45D"
                  fontSize="9.5"
                  fontFamily="sans-serif"
                  fontWeight="600"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
                >
                  Mundra &amp; Kandla Port Gateway
                </text>
              </g>
            )}
          </g>

        </svg>

        {/* Floating Active Corridor HUD Card (Automatically updates as routes cycle) */}
        <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-20 max-w-[270px] sm:max-w-xs bg-navy-900/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-slate-700/80 shadow-2xl text-white transition-all duration-300">
          <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: activeDest.color }}
              ></span>
              <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                {activeDest.country}
              </span>
            </div>
            <span className="text-[9px] font-mono text-teal bg-teal/10 px-1.5 py-0.5 rounded border border-teal/20">
              Active Lane
            </span>
          </div>

          <div className="mt-1.5 space-y-1 text-xs">
            <div className="flex items-start gap-1 text-slate-300">
              <Anchor className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
              <span className="leading-tight text-[11px]">
                <strong>Ports:</strong> {activeDest.portName}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[10px] text-slate-300 pt-0.5">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-teal" />
                <span>{activeDest.transitDays}</span>
              </span>
              <span className="flex items-center gap-1 font-mono text-slate-400">
                <Ship className="w-3 h-3 text-gold" />
                <span>{activeDest.nauticalMiles}</span>
              </span>
            </div>

            <div className="text-[10px] text-slate-400 line-clamp-1 pt-1 border-t border-slate-800/60">
              <span className="text-slate-300 font-medium">Cargo:</span> {activeDest.commodities}
            </div>
          </div>
        </div>

        {/* Mini Corridor Cycle Indicator Dots at Bottom-Right of map */}
        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-navy-900/80 backdrop-blur-sm px-2 py-1 rounded-md border border-slate-800/80">
          {TARGET_DESTINATIONS.map((d, idx) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex 
                  ? 'w-4 h-1.5 bg-gold' 
                  : 'w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400'
              }`}
              title={`Switch to ${d.country}`}
            />
          ))}
        </div>

      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gold"></span>
          Direct Sourcing: Gujarat (Mundra &amp; Kandla)
        </span>
        <span className="italic text-[10px]">
          Auto-cycling through 6 GCC destination ports
        </span>
      </div>

    </div>
  );
}

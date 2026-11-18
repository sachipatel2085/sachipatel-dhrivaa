import React, { useState } from 'react';
import { 
  Anchor, 
  Globe2, 
  Navigation, 
  Clock, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  MapPin,
  Compass,
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
  const [selectedId, setSelectedId] = useState<string>('uae');
  const [viewMode, setViewMode] = useState<'world' | 'gulf'>('world');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeDest: TradeDestination = 
    TARGET_DESTINATIONS.find(d => d.id === (hoveredId || selectedId)) || TARGET_DESTINATIONS[0];

  const isZoomed = viewMode === 'gulf';
  // Dynamic scale factor for SVG text and strokes between 960w full world and 220w zoomed Gulf
  const sf = isZoomed ? 0.28 : 1.0;

  const currentViewBox = isZoomed 
    ? "535 145 220 120" 
    : "0 0 960 480";

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Top Interactive Controls & Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        
        {/* Origin Live Indicator */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-gold animate-ping absolute opacity-75"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gold relative"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white font-heading">
                Origin Gateway: Gujarat, India
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/30">
                Mundra &amp; Kandla
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Direct ocean freight connection to Arabian Gulf &amp; Indian Ocean terminals
            </p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 bg-navy-900/90 p-1 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => setViewMode('world')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              viewMode === 'world'
                ? 'bg-gold text-navy-950 font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
            title="Show full authentic world map with global shipping corridors"
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>Global World Map</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('gulf')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              viewMode === 'gulf'
                ? 'bg-teal text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
            title="Zoom into Arabian Gulf & Red Sea maritime corridors"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Gulf Corridor Focus</span>
          </button>
        </div>

      </div>

      {/* Main Map Presentation Stage */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] lg:aspect-[16/8] bg-navy-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group select-none">
        
        {/* Ocean Background & Bathymetric Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,#0f2844_0%,#081726_70%,#050e18_100%)]"></div>

        {/* Subtle Lat/Long Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#16304d15_1px,transparent_1px),linear-gradient(to_bottom,#16304d15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Compass Rose Accent (Top Right) */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none opacity-40 hidden sm:flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
          <Compass className="w-4 h-4 text-gold animate-spin-slow" />
          <span>INDIAN OCEAN TRADE NETWORK</span>
        </div>

        {/* SVG World Map */}
        <svg
          viewBox={currentViewBox}
          className="w-full h-full relative z-0 transition-all duration-700 ease-in-out"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="corridorGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C8A45D" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#398D89" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="globalLaneGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8A45D" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#398D89" stopOpacity="0.2" />
            </linearGradient>

            {/* Glowing Drop Filter */}
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
            {/* Tropic of Cancer (23.5° N) -> y ≈ 201 */}
            <line x1="0" y1="201.7" x2="960" y2="201.7" />
            {/* Equator (0°) -> y ≈ 280 */}
            <line x1="0" y1="280.0" x2="960" y2="280.0" />
            {/* Prime Meridian (0°) -> x = 480 */}
            <line x1="480" y1="0" x2="480" y2="480" />
            {/* 60°E Meridian (Arabian Sea) -> x = 640 */}
            <line x1="640" y1="0" x2="640" y2="480" stroke="#C8A45D" strokeWidth={0.8 * sf} opacity="0.4" />
          </g>

          {/* 2. Authentic World Landmass (Continents) */}
          <path
            d={WORLD_LANDMASS}
            fill="#122744"
            stroke="#1b395d"
            strokeWidth={0.6 * sf}
            className="transition-colors duration-300"
          />

          {/* 3. Non-Target Highlights (India Origin Base) */}
          {TARGET_COUNTRY_PATHS['IN'] && (
            <path
              d={TARGET_COUNTRY_PATHS['IN']}
              fill="#163c63"
              stroke="#398D89"
              strokeWidth={1.2 * sf}
              className="transition-all duration-300"
            />
          )}

          {/* 4. Target GCC Countries (Interactive Landmasses) */}
          {TARGET_DESTINATIONS.map((dest) => {
            const p = TARGET_COUNTRY_PATHS[dest.code];
            if (!p) return null;
            const isSelected = dest.id === activeDest.id;
            return (
              <path
                key={`country-${dest.id}`}
                d={p}
                fill={isSelected ? (dest.id === 'uae' ? '#C8A45D' : '#2A7270') : '#183a5c'}
                fillOpacity={isSelected ? 0.85 : 0.6}
                stroke={isSelected ? '#C8A45D' : '#398D89'}
                strokeWidth={(isSelected ? 1.4 : 0.8) * sf}
                className="cursor-pointer transition-all duration-300 hover:fill-teal/60"
                onClick={() => setSelectedId(dest.id)}
                onMouseEnter={() => setHoveredId(dest.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <title>{dest.country} - Click to inspect trade corridor</title>
              </path>
            );
          })}

          {/* 5. Global Secondary Maritime Shipping Corridors (Visible in World Mode) */}
          <g opacity={isZoomed ? "0.2" : "0.7"}>
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
                  <circle r={2.5 * sf} fill="#398D89">
                    <animateMotion
                      dur="5s"
                      repeatCount="indefinite"
                      path={lane.path}
                      keyPoints="0;1"
                      keyTimes="0;1"
                    />
                  </circle>
                )}
              </g>
            ))}
          </g>

          {/* 6. Primary Commercial Trade Routes to GCC Destinations */}
          {TARGET_DESTINATIONS.map((dest) => {
            const isSelected = dest.id === activeDest.id;
            const routeStrokeColor = isSelected ? '#C8A45D' : '#398D89';
            const baseOpacity = isSelected ? 1 : 0.45;
            const strokeW = (isSelected ? 2.2 : 1.4) * sf;

            return (
              <g key={`route-${dest.id}`} className="transition-opacity duration-300">
                {/* Route Glow Underlay */}
                <path
                  d={dest.routePath}
                  stroke={dest.color}
                  strokeWidth={(isSelected ? 4 : 2) * sf}
                  strokeOpacity={isSelected ? 0.35 : 0.1}
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

                {/* Traveling Photon / Cargo Beacon along the Path */}
                <circle
                  r={(isSelected ? 3.2 : 2.2) * sf}
                  fill={isSelected ? "#FFFFFF" : dest.color}
                  stroke={dest.color}
                  strokeWidth={0.8 * sf}
                  filter="url(#routeBloom)"
                >
                  <animateMotion
                    dur={isSelected ? "2.6s" : "4.2s"}
                    repeatCount="indefinite"
                    path={dest.routePath}
                    keyPoints="0;1"
                    keyTimes="0;1"
                  />
                </circle>

                {/* Secondary Route (e.g. Red Sea to Jeddah for Saudi Arabia) */}
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
                      r={2.2 * sf}
                      fill={dest.color}
                      filter="url(#routeBloom)"
                    >
                      <animateMotion
                        dur="4.5s"
                        repeatCount="indefinite"
                        path={dest.altRoutePath}
                      />
                    </circle>
                  </>
                )}
              </g>
            );
          })}

          {/* 7. Destination Port Markers & Beacons */}
          {TARGET_DESTINATIONS.map((dest) => {
            const isSelected = dest.id === activeDest.id;
            const { x, y } = dest.portCoords;
            const r = (isSelected ? 4 : 2.6) * sf;

            return (
              <g
                key={`port-${dest.id}`}
                className="cursor-pointer group/marker"
                onClick={() => setSelectedId(dest.id)}
                onMouseEnter={() => setHoveredId(dest.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Pulsing Radar Ring when active */}
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

                {/* Port Core Node */}
                <circle
                  cx={x}
                  cy={y}
                  r={r}
                  fill={isSelected ? dest.color : '#38BDF8'}
                  stroke="#FFFFFF"
                  strokeWidth={0.7 * sf}
                  className="transition-transform duration-200"
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

                {/* Alternate Port for Saudi (Jeddah) in Zoomed Mode */}
                {dest.altPortCoords && (
                  <g>
                    <circle
                      cx={dest.altPortCoords.x}
                      cy={dest.altPortCoords.y}
                      r={(isSelected ? 3.5 : 2.2) * sf}
                      fill={dest.color}
                      stroke="#FFFFFF"
                      strokeWidth={0.6 * sf}
                    />
                    {isZoomed && (
                      <text
                        x={dest.altPortCoords.x - 22 * sf}
                        y={dest.altPortCoords.y + 1 * sf}
                        fill="#94A3B8"
                        fontSize={3.2 * sf}
                        fontFamily="sans-serif"
                      >
                        Jeddah
                      </text>
                    )}
                  </g>
                )}
              </g>
            );
          })}

          {/* 8. Sourcing Origin Gateway: Gujarat, India (Mundra / Kandla) */}
          <g className="cursor-pointer">
            {/* Multiple Radar Waves */}
            <circle
              cx={SOURCING_ORIGIN.coords.x}
              cy={SOURCING_ORIGIN.coords.y}
              r={14 * sf}
              stroke="#C8A45D"
              fill="none"
              className="animate-radar-wave"
            />
            <circle
              cx={SOURCING_ORIGIN.coords.x}
              cy={SOURCING_ORIGIN.coords.y}
              r={7 * sf}
              fill="#C8A45D"
              fillOpacity="0.3"
            />
            {/* Origin Pin Core */}
            <circle
              cx={SOURCING_ORIGIN.coords.x}
              cy={SOURCING_ORIGIN.coords.y}
              r={4.2 * sf}
              fill="#C8A45D"
              stroke="#FFFFFF"
              strokeWidth={1.2 * sf}
              filter="url(#routeBloom)"
            />

            {/* Origin Label */}
            {isZoomed ? (
              <g>
                <rect
                  x={SOURCING_ORIGIN.coords.x + 5 * sf}
                  y={SOURCING_ORIGIN.coords.y - 7 * sf}
                  width={52 * sf}
                  height={13 * sf}
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
                  Mundra &amp; Kandla Hub
                </text>
              </g>
            ) : (
              <g>
                <text
                  x={SOURCING_ORIGIN.coords.x + 12}
                  y={SOURCING_ORIGIN.coords.y - 2}
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
                >
                  Gujarat, India
                </text>
                <text
                  x={SOURCING_ORIGIN.coords.x + 12}
                  y={SOURCING_ORIGIN.coords.y + 12}
                  fill="#C8A45D"
                  fontSize="10"
                  fontFamily="sans-serif"
                  fontWeight="600"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
                >
                  Sourcing Gateway (Mundra / Kandla)
                </text>
              </g>
            )}
          </g>

        </svg>

        {/* Floating Interactive Route HUD Card on Map (Bottom Left) */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 max-w-[280px] sm:max-w-sm bg-navy-900/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-slate-700/80 shadow-2xl text-white transition-all duration-300">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: activeDest.color }}
              ></span>
              <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                {activeDest.country}
              </span>
            </div>
            <span className="text-[10px] font-mono text-teal bg-teal/10 px-2 py-0.5 rounded border border-teal/20">
              Active Lane
            </span>
          </div>

          <div className="mt-2 space-y-1.5 text-xs">
            <div className="flex items-start gap-1.5 text-slate-300">
              <Anchor className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
              <span className="leading-tight text-[11px] sm:text-xs">
                <strong>Ports:</strong> {activeDest.portName}
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-teal" />
                <span>{activeDest.transitDays}</span>
              </span>
              <span className="flex items-center gap-1 font-mono text-slate-400">
                <Ship className="w-3 h-3 text-gold" />
                <span>{activeDest.nauticalMiles}</span>
              </span>
            </div>

            <div className="text-[11px] text-slate-400 line-clamp-2 pt-1 border-t border-slate-800/60">
              <span className="text-slate-300 font-medium">Cargo:</span> {activeDest.commodities}
            </div>
          </div>
        </div>

        {/* Map Legend (Bottom Right) */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 hidden md:flex items-center gap-3 bg-navy-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800 text-[10px] text-slate-300">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            Gujarat Origin
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal"></span>
            Gulf Berths
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-0.5 bg-gold border-t border-dashed border-gold"></span>
            Maritime Arcs
          </span>
        </div>

      </div>

      {/* Target Destination Selectable Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {TARGET_DESTINATIONS.map((dest) => {
          const isSelected = dest.id === activeDest.id;
          return (
            <button
              key={`btn-${dest.id}`}
              type="button"
              onClick={() => {
                setSelectedId(dest.id);
                // When selecting a destination, default to zoomed view for close detail
                setViewMode('gulf');
              }}
              onMouseEnter={() => setHoveredId(dest.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-3 rounded-xl text-left transition-all duration-300 group border ${
                isSelected
                  ? 'bg-navy-900 border-gold shadow-lg shadow-gold/10 -translate-y-1'
                  : 'bg-navy-900/70 border-slate-800 hover:border-slate-700 hover:bg-navy-900'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold font-heading transition-colors ${
                  isSelected ? 'text-gold' : 'text-white group-hover:text-gold'
                }`}>
                  {dest.country}
                </span>
                <span 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: dest.color }}
                ></span>
              </div>
              <p className="text-[10px] text-slate-400 line-clamp-1">
                {dest.transitDays}
              </p>
              <span className="text-[9px] font-mono text-teal mt-1 block">
                {dest.code} Sea Lane
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}

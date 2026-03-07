"use client";

import { useEffect, useState, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { Search, MapPin as MapPinIcon, Navigation } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 1. FIX MARKER ICON (Để ngoài component để tránh khởi tạo lại)
const DEFAULT_ICON = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// 2. CÁC COMPONENT PHỤ TRỢ (Phải khai báo TRƯỚC hoặc NGOÀI component chính)
function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, map.getZoom());
  }, [center, map]);
  return null;
}

function MapInvalidator() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);
  return null;
}

function MapEvents({
  onMapClick,
}: {
  onMapClick: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click: (e) => onMapClick(e.latlng.lat, e.latlng.lng),
  });
  return null;
}

// 3. COMPONENT CHÍNH
export default function LocationPicker({
  latitude,
  longitude,
  onLocationChange = () => {}, // Default function để tránh lỗi image_827cd9.png
  height = "400px",
  className = "",
}: {
  latitude?: number;
  longitude?: number;
  onLocationChange?: (lat: number, lng: number, address?: string) => void;
  height?: string;
  className?: string;
}) {
  // State quản lý vị trí
  const [position, setPosition] = useState<[number, number]>([
    latitude || 10.823,
    longitude || 106.629,
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [address, setAddress] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);

  // Hàm lấy địa chỉ
  const fetchAddress = useCallback(async (lat: number, lng: number) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=vi`,
      );
      const data = await res.json();
      const addr = data.display_name || `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
      setAddress(addr);
      return addr;
    } catch (error) {
      return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    }
  }, []);

  // Xử lý Click bản đồ
  const handleMapClick = useCallback(
    async (lat: number, lng: number) => {
      setPosition([lat, lng]);
      onLocationChange(lat, lng);
      const addr = await fetchAddress(lat, lng);
      onLocationChange(lat, lng, addr);
    },
    [fetchAddress, onLocationChange],
  );

  // Tìm kiếm
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchQuery)}&format=json&limit=1&countrycodes=vn`,
      );
      const data = await res.json();
      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        const nLat = parseFloat(lat);
        const nLng = parseFloat(lon);
        setPosition([nLat, nLng]);
        setAddress(display_name);
        onLocationChange(nLat, nLng, display_name);
      }
    } finally {
      setIsSearching(false);
    }
  };

  // VỊ TRÍ CỦA TÔI - Đã sửa lỗi tham chiếu setPosition
  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Trình duyệt không hỗ trợ định vị");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const newPos: [number, number] = [lat, lng];

        setPosition(newPos); // Đã có scope vì nằm trong Component chính
        onLocationChange(lat, lng);

        const addr = await fetchAddress(lat, lng);
        onLocationChange(lat, lng, addr);
        setSearchQuery("");
      },
      (error) => {
        alert("Không thể lấy vị trí. Vui lòng cấp quyền truy cập vị trí.");
      },
      { enableHighAccuracy: true },
    );
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-2">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Tìm địa điểm..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold"
          >
            {isSearching ? "..." : "Tìm"}
          </button>
          <button
            type="button"
            onClick={handleGetCurrentLocation}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl font-bold"
          >
            <Navigation size={18} />
            <span>Vị trí của tôi</span>
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div
        style={{ height }}
        className="relative border shadow-md rounded-2xl overflow-hidden"
      >
        <MapContainer center={position} zoom={15} className="w-full h-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <ChangeView center={position} />
          <MapInvalidator />
          <Marker position={position} icon={DEFAULT_ICON} />
          <MapEvents onMapClick={handleMapClick} />
        </MapContainer>

        {address && (
          <div className="absolute bottom-4 left-4 right-4 z-[1000] bg-white/90 p-3 rounded-xl shadow-lg border flex gap-3">
            <MapPinIcon size={16} className="text-blue-600 shrink-0" />
            <p className="text-xs font-semibold text-gray-700">{address}</p>
          </div>
        )}
      </div>
    </div>
  );
}

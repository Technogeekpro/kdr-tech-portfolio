"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

interface Brand {
  id: string;
  name: string;
  logo_url: string;
  display_order: number;
}

const BrandScroll = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const { data, error } = await supabase
        .from('brands')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;

      if (data && data.length > 0) {
        setBrands(data);
      } else {
        // Fallback to sample brands if no data
        setBrands([
          { id: '1', name: 'React', logo_url: '⚛️', display_order: 1 },
          { id: '2', name: 'Next.js', logo_url: '▲', display_order: 2 },
          { id: '3', name: 'TypeScript', logo_url: 'TS', display_order: 3 },
          { id: '4', name: 'Tailwind', logo_url: '🎨', display_order: 4 },
          { id: '5', name: 'Node.js', logo_url: '🟢', display_order: 5 },
          { id: '6', name: 'MongoDB', logo_url: '🍃', display_order: 6 },
          { id: '7', name: 'PostgreSQL', logo_url: '🐘', display_order: 7 },
          { id: '8', name: 'AWS', logo_url: '☁️', display_order: 8 },
        ]);
      }
    } catch (error) {
      console.error('Error fetching brands:', error);
      // Fallback to sample brands on error
      setBrands([
        { id: '1', name: 'React', logo_url: '⚛️', display_order: 1 },
        { id: '2', name: 'Next.js', logo_url: '▲', display_order: 2 },
        { id: '3', name: 'TypeScript', logo_url: 'TS', display_order: 3 },
        { id: '4', name: 'Tailwind', logo_url: '🎨', display_order: 4 },
        { id: '5', name: 'Node.js', logo_url: '🟢', display_order: 5 },
        { id: '6', name: 'MongoDB', logo_url: '🍃', display_order: 6 },
        { id: '7', name: 'PostgreSQL', logo_url: '🐘', display_order: 7 },
        { id: '8', name: 'AWS', logo_url: '☁️', display_order: 8 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full py-12 flex items-center justify-center">
        <div className="text-gray-400">Loading brands...</div>
      </div>
    );
  }

  const renderBrandCard = (brand: Brand, index: number, prefix: string) => {
    const isImageUrl = brand.logo_url.startsWith('http') || brand.logo_url.startsWith('/');

    return (
      <div
        key={`${prefix}-${index}`}
        className="flex-shrink-0 w-32 h-24 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
      >
        <div className="text-center">
          {isImageUrl ? (
            <div className="relative w-16 h-16 mx-auto mb-2">
              <Image
                src={brand.logo_url}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="text-4xl mb-2">{brand.logo_url}</div>
          )}
          <div className="text-sm text-gray-300 font-medium">{brand.name}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-12 overflow-hidden relative">
      <div className="flex flex-col gap-8">
        {/* First stripe - Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-left gap-16">
            {[...brands, ...brands, ...brands].map((brand, index) =>
              renderBrandCard(brand, index, 'left')
            )}
          </div>
        </div>

        {/* Second stripe - Left to Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-right gap-16">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`right-${index}`}
                className="flex-shrink-0 w-32 h-24 flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-center">
                  {brand.logo_url.startsWith('http') || brand.logo_url.startsWith('/') ? (
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <Image
                        src={brand.logo_url}
                        alt={brand.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-4xl mb-2">{brand.logo_url}</div>
                  )}
                  <div className="text-sm text-gray-300 font-medium">{brand.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandScroll;

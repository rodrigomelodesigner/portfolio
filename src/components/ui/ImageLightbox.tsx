import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
  caption?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
  caption,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem em alta definição"
      className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider truncate max-w-md">
            {imageAlt}
          </span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition focus:outline-none focus:ring-2 focus:ring-zinc-400"
            aria-label="Fechar visualizador de imagem (Atalho: ESC)"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Image Content */}
        <div className="p-4 md:p-6 overflow-auto flex-1 flex items-center justify-center bg-zinc-100/50 dark:bg-zinc-950/50">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="max-h-[70vh] w-auto object-contain rounded border border-zinc-200 dark:border-zinc-800"
          />
        </div>

        {/* Optional Caption */}
        {caption && (
          <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 leading-relaxed">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};

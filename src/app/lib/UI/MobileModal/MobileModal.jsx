
'use client'

import { useEffect, useRef } from 'react';
import styles from './MobileModal.module.scss';
import cn from 'classnames';

export default function MobileModal({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  closeOnOverlayClick = true,
  hideHeader = false,
  className = '',
}) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  // Блокируем скролл при открытии
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Для мобильных устройств
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    };
  }, [isOpen]);

  // Закрытие по ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Клик по оверлею
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  // Фокусировка на модалке при открытии (для доступности)
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "mobile-modal-title" : undefined}
    >
      <div 
        ref={modalRef}
        className={cn(styles.modal, className)}
        tabIndex={-1}
      >
        {/* Хедер модалки (опционально) */}
        {!hideHeader && (
          <div className={styles.modalHeader}>
            {title && (
              <h2 
                id="mobile-modal-title" 
                className={styles.modalTitle}
              >
                {title}
              </h2>
            )}
            
            {showCloseButton && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Закрыть"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M18 6L6 18M6 6L18 18" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Контент модалки */}
        <div 
          ref={contentRef}
          className={styles.modalContent}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
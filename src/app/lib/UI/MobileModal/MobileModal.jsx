'use client'

import { useEffect, useRef, useState } from 'react';
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
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);


  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
   
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300); 
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  useEffect(() => {
    if (shouldRender && !isClosing) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    };
  }, [shouldRender, isClosing]);

  // Обработка Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && !isClosing) {
        handleClose();
      }
    };

    if (shouldRender && !isClosing) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [shouldRender, isClosing]);

  const handleClose = () => {
    if (!isClosing) {
      setIsClosing(true);
     
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget && !isClosing) {
      handleClose();
    }
  };


  useEffect(() => {
    if (shouldRender && !isClosing && modalRef.current) {
      modalRef.current.focus();
    }
  }, [shouldRender, isClosing]);

  if (!shouldRender) return null;

  return (
    <div 
      className={cn(styles.overlay, { [styles.closing]: isClosing })}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "mobile-modal-title" : undefined}
    >
      <div 
        ref={modalRef}
        className={cn(styles.modal, className, { [styles.closing]: isClosing })}
        tabIndex={-1}
      >
        {!hideHeader && (
          <div className={styles.modalHeader}>
           
            
            {showCloseButton && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={handleClose}
                aria-label="Закрыть"
                disabled={isClosing}
              >
                x
              </button>
            )}
          </div>
        )}

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
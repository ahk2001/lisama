import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Interface for component props for type safety and reusability
interface PlaceCardProps {
  images: string[];
  tags: string[];
  rating: number;
  title: string;
  dateRange: string;
  hostType: string;
  isTopRated?: boolean;
  description: string;
  pricePerNight: number | string;
  priceLabel?: string;
  buttonText?: string;
  whatsappLink?: string;
  className?: string;
}

export const PlaceCard = ({
  images,
  tags,
  rating,
  title,
  dateRange,
  hostType,
  isTopRated = false,
  description,
  pricePerNight,
  priceLabel = "matrícula",
  buttonText = "Matrícula WhatsApp",
  whatsappLink,
  className,
}: PlaceCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Carousel image change handler
  const changeImage = (newDirection: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return images.length - 1;
      if (nextIndex >= images.length) return 0;
      return nextIndex;
    });
  };

  // Animation variants for the carousel
  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // Animation variants for staggering content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      variants={contentVariants}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0px 15px 35px -5px rgba(0, 0, 0, 0.15)',
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className={cn(
        'w-full max-w-sm overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-lg cursor-pointer transition-all',
        className
      )}
    >
      {/* Image Carousel Section */}
      <div className="relative group h-60 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={title}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute h-full w-full object-cover"
          />
        </AnimatePresence>
        
        {/* Carousel Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-black/40 hover:bg-black/60 text-white h-8 w-8" 
            onClick={(e) => changeImage(-1, e)}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-black/40 hover:bg-black/60 text-white h-8 w-8" 
            onClick={(e) => changeImage(1, e)}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Top Badges and Rating */}
        <div className="absolute top-3 left-3 flex gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-background/80 backdrop-blur-md text-xs font-semibold shadow-sm">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="flex items-center gap-1 bg-background/80 backdrop-blur-md font-bold text-xs shadow-sm">
            <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" /> {rating}
          </Badge>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={cn(
                'h-1.5 rounded-full transition-all',
                currentIndex === index ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <motion.div variants={contentVariants} className="p-5 space-y-3">
        <motion.div variants={itemVariants} className="flex justify-between items-start gap-2">
          <h3 className="text-xl font-bold leading-tight">{title}</h3>
          {isTopRated && <Badge variant="outline" className="text-emerald-600 border-emerald-300 bg-emerald-50 shrink-0">Top rated</Badge>}
        </motion.div>

        <motion.div variants={itemVariants} className="text-sm text-muted-foreground flex items-center gap-1.5">
          <span>{dateRange}</span> &bull; <span>{hostType}</span>
        </motion.div>

        <motion.p variants={itemVariants} className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-between items-center pt-2 border-t border-border/50">
          <div>
            <p className="font-bold text-lg text-foreground">
              {typeof pricePerNight === 'number' ? `${pricePerNight}€` : pricePerNight}
            </p>
            <span className="text-xs text-muted-foreground block -mt-1">{priceLabel}</span>
          </div>
          
          <Button 
            className="group bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold px-4"
            onClick={() => {
              if (whatsappLink) window.open(whatsappLink, '_blank');
            }}
          >
            {buttonText}
            <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

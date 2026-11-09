import { PlaceCard } from '@/components/ui/card-22';

// Cursos de Autoescuela Lisama formateados para el PlaceCard
export const lisamaCoursesData = [
  {
    images: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    ],
    tags: ['Permiso B', 'Coche'],
    rating: 4.8,
    title: 'Permiso B (Coche Manual)',
    dateRange: 'Prácticas en Babel',
    hostType: 'Mismo coche en examen',
    isTopRated: true,
    description: 'Preparación integral teórica y práctica en circuitos oficiales de la DGT con profesores pacientes y sin estrés.',
    pricePerNight: 'Desde 137€',
    priceLabel: 'matrícula y test DGT',
    whatsappLink: 'https://wa.me/34689810417?text=Hola%20Autoescuela%20Lisama%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Permiso%20B',
  },
  {
    images: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop',
    ],
    tags: ['Teórica Express', 'Intensivo'],
    rating: 4.9,
    title: 'Curso Teórico Intensivo',
    dateRange: 'Online + Presencial',
    hostType: 'Preguntas trampa DGT',
    isTopRated: false,
    description: 'Aprende la teoría en tiempo récord sin perder convocatorias con plataforma de test 24/7 y tutorías directas.',
    pricePerNight: 'Test 24/7',
    priceLabel: 'acceso ilimitado',
    whatsappLink: 'https://wa.me/34689810417?text=Hola%20Autoescuela%20Lisama%2C%20quisiera%20consultar%20fechas%20del%20curso%20te%C3%B3rico',
  },
  {
    images: [
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=800&auto=format&fit=crop',
    ],
    tags: ['Reciclaje', 'Amaxofobia'],
    rating: 4.8,
    title: 'Clases de Reciclaje',
    dateRange: 'Autovía A-70 y Gran Vía',
    hostType: 'Paciencia absoluta',
    isTopRated: false,
    description: 'Para personas con carnet que desean recuperar la soltura y perder el miedo al volante a su propio ritmo.',
    pricePerNight: 'Por clase',
    priceLabel: 'sin exámenes',
    whatsappLink: 'https://wa.me/34689810417?text=Hola%20Autoescuela%20Lisama%2C%20me%20gustar%C3%ADa%20hacer%20clases%20de%20reciclaje',
  },
];

const PlaceCardDemo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-6 bg-background">
      {lisamaCoursesData.map((course, idx) => (
        <PlaceCard
          key={idx}
          images={course.images}
          tags={course.tags}
          rating={course.rating}
          title={course.title}
          dateRange={course.dateRange}
          hostType={course.hostType}
          isTopRated={course.isTopRated}
          description={course.description}
          pricePerNight={course.pricePerNight}
          priceLabel={course.priceLabel}
          whatsappLink={course.whatsappLink}
        />
      ))}
    </div>
  );
};

export default PlaceCardDemo;

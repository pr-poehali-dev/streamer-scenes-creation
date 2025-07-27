import { useState, useEffect } from 'react';

interface AnimatedCharacterProps {
  imageUrl: string;
  size?: 'small' | 'medium' | 'large';
  mood?: 'idle' | 'excited' | 'focused' | 'happy';
  className?: string;
}

export default function AnimatedCharacter({ 
  imageUrl, 
  size = 'medium', 
  mood = 'idle',
  className = '' 
}: AnimatedCharacterProps) {
  const [currentAnimation, setCurrentAnimation] = useState('animate-character-idle');
  const [eyeAnimation, setEyeAnimation] = useState('');
  const [handAnimation, setHandAnimation] = useState('');

  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-32 h-32'
  };

  useEffect(() => {
    const animations = {
      idle: ['animate-character-idle'],
      excited: ['animate-character-bounce', 'animate-character-wave'],
      focused: ['animate-character-idle'],
      happy: ['animate-character-bounce', 'animate-character-smile']
    };

    const moodAnimations = animations[mood];
    const randomAnimation = moodAnimations[Math.floor(Math.random() * moodAnimations.length)];
    setCurrentAnimation(randomAnimation);

    // Blinking animation
    const blinkInterval = setInterval(() => {
      setEyeAnimation('animate-character-blink');
      setTimeout(() => setEyeAnimation(''), 300);
    }, 3000 + Math.random() * 2000);

    // Hand movement for excited mood
    let handInterval: NodeJS.Timeout;
    if (mood === 'excited') {
      handInterval = setInterval(() => {
        setHandAnimation('animate-character-wave');
        setTimeout(() => setHandAnimation(''), 2000);
      }, 5000 + Math.random() * 3000);
    }

    return () => {
      clearInterval(blinkInterval);
      if (handInterval) clearInterval(handInterval);
    };
  }, [mood]);

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden relative ${currentAnimation}`}>
        <img 
          src={imageUrl} 
          alt="Animated Character" 
          className="w-full h-full object-cover object-center scale-110"
        />
        
        {/* Eye overlay for blinking */}
        <div className={`absolute inset-0 ${eyeAnimation}`}>
          <div className="absolute top-[35%] left-[35%] w-2 h-1 bg-black rounded-full opacity-80"></div>
          <div className="absolute top-[35%] right-[35%] w-2 h-1 bg-black rounded-full opacity-80"></div>
        </div>
        
        {/* Hand movement indicator */}
        {handAnimation && (
          <div className="absolute -top-2 -right-2 text-yellow-400">
            <div className={handAnimation}>
              👋
            </div>
          </div>
        )}
        
        {/* Mood indicators */}
        {mood === 'excited' && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-lg animate-bounce">
            ⚡
          </div>
        )}
        
        {mood === 'happy' && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-lg animate-pulse">
            ❤️
          </div>
        )}
        
        {mood === 'focused' && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-lg animate-spin">
            🎯
          </div>
        )}
      </div>
      
      {/* Breathing effect overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/5 animate-character-idle"></div>
    </div>
  );
}
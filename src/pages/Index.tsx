import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import AnimatedCharacter from '@/components/AnimatedCharacter';

type Scene = 'start' | 'gaming' | 'chat' | 'end';

export default function Index() {
  const [currentScene, setCurrentScene] = useState<Scene>('start');
  const [countdown, setCountdown] = useState(5);
  
  const characterImageUrl = 'https://cdn.poehali.dev/files/1307ca73-70a3-4484-933b-6084ae4a5297.png';

  const scenes = [
    { id: 'start', name: 'Стартовая сцена', icon: 'Play' },
    { id: 'gaming', name: 'Игровая сцена', icon: 'Gamepad2' },
    { id: 'chat', name: 'Чат сцена', icon: 'MessageCircle' },
    { id: 'end', name: 'Финальная сцена', icon: 'Square' },
  ];

  const renderStartScene = () => (
    <div className="min-h-screen bg-gradient-to-br from-stream-purple via-stream-dark to-black flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="text-center z-10 animate-slide-up">
        <h1 className="font-montserrat text-7xl font-black text-white mb-4 bg-gradient-to-r from-stream-orange to-yellow-400 bg-clip-text text-transparent">
          СТРИМ НАЧИНАЕТСЯ
        </h1>
        <p className="font-opensans text-xl text-gray-300 mb-12">
          Готовьтесь к эпичному геймплею!
        </p>
        
        <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-stream-orange/30 animate-pulse-glow">
          <div className="text-6xl font-montserrat font-bold text-stream-orange mb-4 animate-countdown">
            {countdown}
          </div>
          <div className="text-gray-400 font-opensans">секунд до старта</div>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-gray-300">
            <Icon name="Users" size={20} />
            <span className="font-opensans">0 зрителей</span>
          </div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
          <span className="text-red-400 font-opensans font-semibold">LIVE</span>
        </div>
      </div>
      
      {/* Character Avatar */}
      <div className="fixed bottom-8 right-8 z-20">
        <div className="relative">
          <div className="border-4 border-stream-orange/50 animate-pulse-glow shadow-2xl rounded-full">
            <AnimatedCharacter 
              imageUrl={characterImageUrl}
              size="large"
              mood="excited"
              className=""
            />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGamingScene = () => (
    <div className="min-h-screen bg-stream-dark relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="bg-black/70 backdrop-blur-md rounded-2xl p-4 border border-stream-orange/30">
            <h2 className="font-montserrat text-2xl font-bold text-white mb-2">
              Название игры
            </h2>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="flex items-center gap-1">
                <Icon name="Users" size={16} />
                <span className="font-opensans text-sm">1,234</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Heart" size={16} />
                <span className="font-opensans text-sm">89</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black/70 backdrop-blur-md rounded-2xl p-4 border border-stream-purple/30">
            <div className="flex items-center gap-2 text-white">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-opensans font-semibold">LIVE</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-stream-orange/20 to-stream-purple/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center">
          <Icon name="Gamepad2" size={80} className="mx-auto mb-4 text-stream-orange" />
          <h3 className="font-montserrat text-3xl font-bold text-white mb-2">
            ИГРОВАЯ ЗОНА
          </h3>
          <p className="font-opensans text-gray-300">
            Здесь отображается основной геймплей
          </p>
        </div>
        
        <div className="fixed bottom-6 right-6 bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-stream-orange/30">
          <div className="flex items-center gap-3">
            <div className="border-2 border-stream-orange rounded-full">
              <AnimatedCharacter 
                imageUrl={characterImageUrl}
                size="small"
                mood="focused"
                className=""
              />
            </div>
            <div>
              <div className="font-opensans font-semibold text-white">Стример</div>
              <div className="font-opensans text-xs text-gray-400">В игре</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderChatScene = () => (
    <div className="min-h-screen bg-gradient-to-br from-stream-dark to-black flex">
      <div className="flex-1 p-8 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-montserrat text-6xl font-black text-white mb-6 bg-gradient-to-r from-stream-purple to-stream-orange bg-clip-text text-transparent">
            ОБЩЕНИЕ С ЧАТОМ
          </h1>
          <p className="font-opensans text-xl text-gray-300 mb-12">
            Время для ваших вопросов и общения!
          </p>
          
          <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-stream-purple/30 mb-8 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="border-3 border-stream-purple shadow-lg rounded-full">
                <AnimatedCharacter 
                  imageUrl={characterImageUrl}
                  size="medium"
                  mood="happy"
                  className=""
                />
              </div>
            </div>
            <Icon name="MessageCircle" size={60} className="mx-auto mb-4 text-stream-purple mt-6" />
            <h3 className="font-montserrat text-2xl font-bold text-white mb-4">
              Задавайте вопросы в чат
            </h3>
            <div className="flex items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} />
                <span className="font-opensans">1,234 зрителей</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MessageSquare" size={20} />
                <span className="font-opensans">567 сообщений</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-black/30 border-stream-orange/30">
              <CardContent className="p-6 text-center">
                <Icon name="Trophy" size={40} className="mx-auto mb-3 text-stream-orange" />
                <h4 className="font-montserrat font-bold text-white mb-2">Донаты</h4>
                <p className="font-opensans text-gray-300 text-sm">Спасибо за поддержку!</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/30 border-stream-purple/30">
              <CardContent className="p-6 text-center">
                <Icon name="Zap" size={40} className="mx-auto mb-3 text-stream-purple" />
                <h4 className="font-montserrat font-bold text-white mb-2">Подписки</h4>
                <p className="font-opensans text-gray-300 text-sm">Новые подписчики!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEndScene = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-stream-dark to-stream-purple flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTQwIDQwYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIwLTIwLTguOTU0LTIwLTIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="text-center z-10 animate-slide-up">
        <h1 className="font-montserrat text-6xl font-black text-white mb-6">
          СПАСИБО ЗА СТРИМ!
        </h1>
        <p className="font-opensans text-xl text-gray-300 mb-12">
          До встречи в следующий раз!
        </p>
        
        <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-stream-orange/30 mb-8 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="border-4 border-stream-orange shadow-2xl rounded-full">
              <AnimatedCharacter 
                imageUrl={characterImageUrl}
                size="large"
                mood="happy"
                className="w-20 h-20"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-6 mt-4">
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-stream-orange mb-2">
                1,234
              </div>
              <div className="text-gray-400 font-opensans text-sm">Зрителей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-stream-purple mb-2">
                567
              </div>
              <div className="text-gray-400 font-opensans text-sm">Сообщений</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-yellow-400 mb-2">
                89
              </div>
              <div className="text-gray-400 font-opensans text-sm">Лайков</div>
            </div>
          </div>
          
          <div className="text-white font-opensans">
            <p className="mb-2">Следующий стрим: <span className="font-semibold text-stream-orange">Завтра в 20:00</span></p>
            <p>Игра: <span className="font-semibold text-stream-purple">Новинка месяца</span></p>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <Button 
            variant="outline" 
            className="border-stream-orange text-stream-orange hover:bg-stream-orange hover:text-white"
          >
            <Icon name="Bell" size={16} className="mr-2" />
            Подписаться
          </Button>
          <Button 
            variant="outline" 
            className="border-stream-purple text-stream-purple hover:bg-stream-purple hover:text-white"
          >
            <Icon name="Share2" size={16} className="mr-2" />
            Поделиться
          </Button>
        </div>
      </div>
    </div>
  );

  const renderCurrentScene = () => {
    switch (currentScene) {
      case 'start': return renderStartScene();
      case 'gaming': return renderGamingScene();
      case 'chat': return renderChatScene();
      case 'end': return renderEndScene();
      default: return renderStartScene();
    }
  };

  return (
    <div className="min-h-screen relative">
      {renderCurrentScene()}
      
      <div className="fixed top-6 left-6 z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <h3 className="font-montserrat font-bold text-white mb-3 text-sm">СЦЕНЫ СТРИМА</h3>
          <div className="space-y-2">
            {scenes.map((scene) => (
              <Button
                key={scene.id}
                variant={currentScene === scene.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentScene(scene.id as Scene)}
                className={`w-full justify-start text-xs ${
                  currentScene === scene.id 
                    ? 'bg-stream-orange text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon name={scene.icon as any} size={14} className="mr-2" />
                {scene.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
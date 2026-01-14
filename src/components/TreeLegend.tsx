import { Card, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const TreeLegend = () => {
  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur-sm shadow-2xl mb-12">
      <CardHeader>
        <div className="text-center space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Полное генеалогическое древо династии Романовых включает правителей, их супругов, детей и родственников.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Icon name="Crown" size={14} className="text-background" />
              </div>
              <span className="text-primary">Правители</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center">
                <Icon name="Heart" size={14} className="text-background" />
              </div>
              <span className="text-pink-400">Супруги</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <Icon name="User" size={14} className="text-foreground" />
              </div>
              <span className="text-muted-foreground">Родственники</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-8 pt-3 border-t border-border/30">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary/50 to-primary rounded-full" />
              <span className="text-muted-foreground">Родитель → Дети</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500/50 to-pink-500/50 rounded-full" />
              <span className="text-muted-foreground">Брак</span>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

import Icon from '@/components/ui/icon';
import { PersonData } from '@/data/familyTreeData';

interface PersonCardProps {
  person: PersonData;
  isSelected: boolean;
  isHighlighted: boolean;
  onSelect: () => void;
}

const getIconForPerson = (person: PersonData) => {
  if (person.type === 'ruler') return 'Crown';
  if (person.type === 'spouse') return 'Heart';
  return 'User';
};

export const PersonCard = ({ person, isSelected, isHighlighted, onSelect }: PersonCardProps) => {
  const isRuler = person.type === 'ruler';
  const isSpouse = person.type === 'spouse';

  return (
    <button
      onClick={onSelect}
      className={`group relative transition-all duration-500 ${
        isSelected ? 'scale-105' : 'hover:scale-105'
      }`}
    >
      <div
        className={`relative p-5 rounded-xl transition-all duration-500 backdrop-blur-sm ${
          isRuler ? 'w-72' : 'w-64'
        } ${
          isSelected
            ? 'bg-gradient-to-br from-primary/30 via-primary/20 to-primary/30 border-2 border-primary shadow-2xl shadow-primary/50'
            : isHighlighted
            ? 'bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 border border-primary/40 shadow-xl shadow-primary/30'
            : `${isRuler ? 'bg-card/60' : isSpouse ? 'bg-card/40' : 'bg-card/30'} border border-border hover:border-primary/50 shadow-lg hover:shadow-xl`
        }`}
      >
        <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
          isRuler ? 'bg-primary' : isSpouse ? 'bg-pink-500' : 'bg-muted'
        }`}>
          <Icon name={getIconForPerson(person)} className={isRuler || isSpouse ? 'text-background' : 'text-foreground'} size={20} />
        </div>

        <div className="space-y-2">
          <div>
            <h3 className={`font-cormorant font-bold ${isRuler ? 'text-xl' : 'text-lg'} text-foreground mb-0.5`}>
              {person.name}
            </h3>
            <p className={`${isRuler ? 'text-primary' : isSpouse ? 'text-pink-400' : 'text-muted-foreground'} text-xs font-semibold`}>
              {person.title}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="Calendar" size={12} />
            <span>{person.years}</span>
          </div>

          {person.reign && (
            <div className="flex items-center gap-2 text-xs font-semibold text-primary">
              <Icon name="Shield" size={12} />
              <span>{person.reign}</span>
            </div>
          )}
        </div>

        {isSelected && (
          <div className="mt-3 pt-3 border-t border-primary/30 space-y-2 animate-fade-in">
            <p className="text-xs leading-relaxed text-muted-foreground">
              {person.bio}
            </p>
            {person.achievements && person.achievements.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-primary mb-1.5 flex items-center gap-1">
                  <Icon name="Award" size={10} />
                  Достижения
                </h4>
                <ul className="space-y-0.5">
                  {person.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </button>
  );
};

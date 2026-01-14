import { PersonCard } from '@/components/PersonCard';
import Icon from '@/components/ui/icon';
import { familyTree, PersonData } from '@/data/familyTreeData';

interface FamilyTreeNodeProps {
  personId: string;
  level?: number;
  selectedId: string | null;
  highlightedBranch: Set<string>;
  onSelectPerson: (id: string) => void;
}

export const FamilyTreeNode = ({
  personId,
  level = 0,
  selectedId,
  highlightedBranch,
  onSelectPerson
}: FamilyTreeNodeProps) => {
  const person = familyTree[personId];
  const isSelected = selectedId === personId;
  const isHighlighted = highlightedBranch.has(personId);

  return (
    <div key={personId} className="flex flex-col items-center">
      <PersonCard
        person={person}
        isSelected={isSelected}
        isHighlighted={isHighlighted}
        onSelect={() => onSelectPerson(personId)}
      />

      <div className="mt-8 flex flex-col items-center">
        {person.spouse && person.spouse.length > 0 && (
          <div className="relative mb-8">
            <div 
              className={`absolute top-1/2 left-0 right-0 h-1 rounded-full transition-all duration-500 ${
                isHighlighted 
                  ? 'bg-gradient-to-r from-pink-500/80 via-pink-500 to-pink-500/80' 
                  : 'bg-gradient-to-r from-pink-500/40 via-pink-500/60 to-pink-500/40'
              }`}
              style={{ transform: 'translateY(-50%)' }} 
            />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-4 border-background transition-all duration-500 ${
              isHighlighted ? 'bg-pink-500 scale-110' : 'bg-pink-500'
            }`}>
              <Icon name="Heart" size={16} className="text-white" />
            </div>
            
            <div className="flex gap-6 relative z-10">
              {person.spouse.map(spouseId => (
                <div key={spouseId}>
                  <FamilyTreeNode
                    personId={spouseId}
                    level={level}
                    selectedId={selectedId}
                    highlightedBranch={highlightedBranch}
                    onSelectPerson={onSelectPerson}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {person.children && person.children.length > 0 && (
          <div className="relative">
            <div className={`absolute left-1/2 -translate-x-1/2 -top-8 w-1 h-8 rounded-full shadow-sm transition-all duration-500 ${
              isHighlighted 
                ? 'bg-gradient-to-b from-primary via-primary to-primary/80' 
                : 'bg-gradient-to-b from-primary via-primary/70 to-primary/50'
            }`} />
            
            <div className={`flex gap-12 relative ${person.children.length > 1 ? 'justify-center' : ''}`}>
              {person.children.length > 1 && (
                <>
                  <div 
                    className={`absolute top-0 left-0 right-0 h-1 rounded-full shadow-sm transition-all duration-500 ${
                      isHighlighted
                        ? 'bg-gradient-to-r from-transparent via-primary to-transparent'
                        : 'bg-gradient-to-r from-transparent via-primary to-transparent'
                    }`}
                    style={{ boxShadow: isHighlighted ? '0 0 15px rgba(212, 175, 55, 0.6)' : '0 0 10px rgba(212, 175, 55, 0.3)' }} 
                  />
                  <svg className="absolute top-0 left-0 right-0 h-1 pointer-events-none" style={{ top: '-2px' }}>
                    <defs>
                      <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L6,3 z" fill="rgb(212, 175, 55)" opacity="0.6" />
                      </marker>
                    </defs>
                  </svg>
                </>
              )}
              
              {person.children.map((childId, idx) => (
                <div key={childId} className="relative flex flex-col items-center">
                  {person.children && person.children.length > 1 && (
                    <>
                      <div className={`absolute -top-0 left-1/2 -translate-x-1/2 w-1 h-8 rounded-full transition-all duration-500 ${
                        isHighlighted
                          ? 'bg-gradient-to-b from-primary to-primary/60'
                          : 'bg-gradient-to-b from-primary/70 to-primary/40'
                      }`} />
                      <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-lg border-2 border-background transition-all duration-500 ${
                        isHighlighted ? 'bg-primary scale-125' : 'bg-primary'
                      }`} />
                    </>
                  )}
                  <div className="mt-8">
                    <FamilyTreeNode
                      personId={childId}
                      level={level + 1}
                      selectedId={selectedId}
                      highlightedBranch={highlightedBranch}
                      onSelectPerson={onSelectPerson}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

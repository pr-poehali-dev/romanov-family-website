import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import { FamilyTreeNode } from '@/components/FamilyTreeNode';
import { TreeLegend } from '@/components/TreeLegend';
import { familyTree } from '@/data/familyTreeData';

const Index = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const highlightedBranch = useMemo(() => {
    if (!selectedId) return new Set<string>();
    
    const getAllDescendants = (personId: string): string[] => {
      const person = familyTree[personId];
      if (!person) return [];
      
      const descendants: string[] = [personId];
      
      if (person.spouse) {
        descendants.push(...person.spouse);
      }
      
      if (person.children) {
        person.children.forEach(childId => {
          descendants.push(...getAllDescendants(childId));
        });
      }
      
      return descendants;
    };

    const getAllAncestors = (personId: string): string[] => {
      const ancestors: string[] = [];
      
      Object.values(familyTree).forEach(person => {
        if (person.children?.includes(personId)) {
          ancestors.push(person.id);
          if (person.spouse) {
            ancestors.push(...person.spouse);
          }
          ancestors.push(...getAllAncestors(person.id));
        }
      });
      
      return ancestors;
    };
    
    return new Set([
      ...getAllAncestors(selectedId),
      ...getAllDescendants(selectedId)
    ]);
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <header className="relative border-b border-border/50 backdrop-blur-xl bg-card/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-4">
            <Icon name="Crown" className="text-primary" size={32} />
            <h1 className="text-5xl font-cormorant font-bold text-center bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
              Династия Романовых
            </h1>
            <Icon name="Crown" className="text-primary" size={32} />
          </div>
          <p className="text-center text-muted-foreground mt-3 text-lg">
            1613—1917 • Полное генеалогическое древо
          </p>
        </div>
      </header>

      <main className="relative container mx-auto px-4 py-16">
        <div className="max-w-[1800px] mx-auto">
          <TreeLegend />

          <div className="flex justify-center pb-16 overflow-x-auto">
            <div className="inline-block min-w-full">
              <FamilyTreeNode
                personId="mikhail"
                selectedId={selectedId}
                highlightedBranch={highlightedBranch}
                onSelectPerson={setSelectedId}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="relative border-t border-border/50 backdrop-blur-xl bg-card/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <Icon name="Crown" size={14} className="text-primary" />
            <span>Династия Романовых • 1613–1917 • {Object.keys(familyTree).length} членов семьи</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Reveal } from '@/components/reveal';
import { Check } from 'lucide-react';

export function EngineeringDigitalization() {
  const itemsLeft = [
    'Digital Reporting Solutions',
    'Inspection Workflows',
    'Data Collection Applications'
  ];

  const itemsRight = [
    'Project Dashboards',
    'Documentation Systems',
    'Custom Operational Tools'
  ];

  return (
    <section id="digitalization" className="relative py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <Reveal>
          <div className="mb-8">
            <h2 className="text-offwhite">ENGINEERING DIGITALIZATION</h2>
            <p className="mt-3 max-w-2xl text-secondaryText">
              Practical digital solutions developed around real engineering workflows and project requirements.
            </p>
          </div>

          <div className="grid items-start gap-6 sm:grid-cols-2">
            <ul className="m-0 list-none space-y-4 p-0">
              {itemsLeft.map((text) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-offwhite">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="type-body text-secondaryText">{text}</span>
                </li>
              ))}
            </ul>

            <ul className="m-0 list-none space-y-4 p-0">
              {itemsRight.map((text) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-offwhite">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="type-body text-secondaryText">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

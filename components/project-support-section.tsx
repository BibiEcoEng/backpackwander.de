export function ProjectSupportSection() {
  return (
    <section id="project-support" className="relative py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <h2 className="text-offwhite">PROJECT SUPPORT</h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <ul className="space-y-4">
            <li className="text-secondaryText">Site Coordination</li>
            <li className="text-secondaryText">Manufacturing Surveillance</li>
            <li className="text-secondaryText">Construction Support</li>
          </ul>

          <ul className="space-y-4">
            <li className="text-secondaryText">Engineering Documentation</li>
            <li className="text-secondaryText">Contractor Coordination</li>
            <li className="text-secondaryText">Progress Monitoring</li>
          </ul>

          <ul className="space-y-4">
            <li className="text-secondaryText">Commissioning Assistance</li>
            <li className="text-secondaryText">Remote Project Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

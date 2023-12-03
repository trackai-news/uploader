import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { DropzoneButton } from '@/components/Dropzone/DropzoneButton';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <DropzoneButton/>
    </>
  );
}

import './style.css';
import { FlareFramework } from './FlareFramework';

if (!(window as any).FlareFramework) {
	(window as any).FlareFramework = FlareFramework;
}
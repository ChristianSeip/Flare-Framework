export class FlareFramework {
	static toggleDropdown(button: HTMLElement): void {
		const element = button.nextElementSibling as HTMLElement;
		element.classList.toggle('d-none');
		element.classList.toggle('d-block');
	}

	static openModal(button: HTMLElement): void {
		const element = button.nextElementSibling as HTMLElement;
		element.classList.add('d-block');
	}

	static closeModal(span: HTMLElement): void {
		const element = span.closest(".modal") as HTMLElement;
		element.classList.remove('d-block');
		element.classList.add('d-none');
	}

	static toggleAccordion(button: HTMLElement): void {
		const element = button.nextElementSibling as HTMLElement;
		element.classList.toggle('d-none');
		element.classList.toggle('d-block');
	}
}
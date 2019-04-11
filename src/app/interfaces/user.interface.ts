export interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	role: string;
	status: string;
	super: boolean;
	lastLogin: Date;
	lastCsvUploadedAt: Date;
	successfulSales: number;
	pendingSales: number;
	createdAt: Date;
	updatedAt: Date;
	token: string;
}

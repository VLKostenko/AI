export interface Lead {
	_id: string;
	email: string;
	headline: string;
	current_step: string;
	manual_mode: boolean;
	created_by: string;
	key_words: string[];
	created_at: Date;
	updated_at: Date;
	steps: [
		{
			step: string,
			template_id: string,
			email_body: string,
			sent_at: Date,
			scheduled_for: Date,
			reply_body: string,
			received_at: Date,
			ai_opinion: string,
			sentiment: {
				polarity: number,
				confidence: number,
				value: string;
			}
		}
	];
}
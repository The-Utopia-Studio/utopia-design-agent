# Progress update, 19 October

- Reworked how fellows join Slack during onboarding. They are no longer sent to a page that rejects their email address, they can name the email they actually joined Slack with and confirm it with a code, and a failed channel invite is now retried instead of quietly failing. Shipped to production today.
- Added a Fellow (Studio Member) role so studio members and test accounts can use the fellow workspace without a Drive folder, Slack channel or Linear project being created for them. This makes it much easier to test the full onboarding flow without polluting real fellow data.
- Removed two blockers in onboarding forms. The bank IBAN is now optional and free text, so fellows banking in the US and other places that do not issue one can finish the banking step, and the GitHub link is now optional in tech onboarding. Tool links submitted by one teammate also now fill in for the rest of their team.
- Replaced the onboarding walkthrough video with a version recorded on the current layout, and fixed the sharpness and stretching problems in it, so what fellows watch now matches what they actually see on screen.
- Ran live onboarding sessions with two incoming fellows, Nada at Interstellar and Marc at Interlinked. Both completed the flow. These surfaced a document format problem on one upload step and requests for partner discovery and build progress tracking inside the OS.
- Started work on auditing Slack account links so an account cannot be silently relinked to a different person. This is open for review and not merged yet.

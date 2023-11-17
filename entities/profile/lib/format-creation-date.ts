const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
});

export const formatCreationDate = (iso: string) =>
  dateFormatter.format(new Date(iso));

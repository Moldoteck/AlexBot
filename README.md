<a href="https://t.me/AlexnBot">@AlexnBot</a><br>

# Telegram bot that helps you find gender favoring, polarizing, race related, religion inconsiderate, or other unequal phrasing in text.

Whether your own or someone else’s writing, <b>AlexBot</b> helps you find gender favoring, polarizing, race related, religion inconsiderate, or other <b>unequal</b> phrasing in text.

For example, when `We’ve confirmed his identity` is given, <b>AlexBot</b> will warn you and suggest using `their` instead of `his`.

# Installation and local launch

1. Clone this repo: `git clone https://github.com/Moldoteck/AlexBot`
2. Launch the [mongo database](https://www.mongodb.com/) locally
3. Create `.env` with the environment variables listed below
4. Run `yarn install` in the root folder
5. Run `yarn develop`

And you should be good to go! Feel free to fork and submit pull requests. Thanks!

# Environment variables

- `TOKEN` — Telegram bot token
- `MONGO`— URL of the mongo database

Also, please, consider looking at `.env.sample`.

# License

MIT — use for any purpose. Would be great if you could leave a note about the original developers. Thanks!

Thanks to https://github.com/Borodutch/telegraf-template for the template.
Thanks to https://github.com/get-alex/alex for the idea.
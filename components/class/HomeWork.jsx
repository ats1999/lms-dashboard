import { Typography } from "@material-ui/core";

export default function HomeWork() {
    return (
        <div>
            <Typography color="textPrimary" variant="h5">
                Homework Instructions!
            </Typography>
            <Typography color="textSecondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
            </Typography>

            <Typography color="textPrimary" variant="h5">
                Your Job!
            </Typography>
            <ol>
                <li>
                    <Typography color="textSecondary">Job 1</Typography>
                </li>
                <li>
                    <Typography color="textSecondary">Job 2</Typography>
                </li>
                <li>
                    <Typography color="textSecondary">Job 3</Typography>
                </li>
                <li>
                    <Typography color="textSecondary">Job 4</Typography>
                </li>
            </ol>
        </div>
    );
}

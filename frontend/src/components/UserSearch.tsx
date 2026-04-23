import { useState } from "react"
import Input from "./ui/Input"

function UserSearch() {
    interface UserSearch {
        userSearch: string
    }
    const [value, setValue] = useState<UserSearch>({ userSearch: "" })
    console.log(value)
    return <Input<UserSearch> type="text" id="userSearch" setValue={setValue} value={value.userSearch} placeholder="Search user" />
}

export default UserSearch

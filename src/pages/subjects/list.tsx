import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb"
import { ListView } from "@/components/refine-ui/views/list-view"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

const SubjectsList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <ListView>
            <Breadcrumb />

            <h1 className="page-title">Subject</h1>
            <div className="intro-row">
                <p>Quick access to essential metrics and management tools and i'am IRON MAN</p>
                <div className="actions-row">
                    <div className="search-field">
                        <Search className="search-icon" />

                        <Input 
                            type="text" 
                            placeholder="Search by name..." 
                            className="pl-10 w-full"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        
                    </div>
                </div>
            </div>
        </ListView>
    )
}
export default SubjectsList

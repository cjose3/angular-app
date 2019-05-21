import { NgModule } from '@angular/core'
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatCardModule } from '@angular/material'

const modules = [MatInputModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatCardModule]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
